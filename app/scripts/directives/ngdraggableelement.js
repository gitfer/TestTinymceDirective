'use strict';

/**
 * @ngdoc directive
 * @name testTinymceApp.directive:ngDraggableElement
 * @description
 * # ngDraggableElement
 */
angular.module('testTinymceApp')
    .directive('ngDraggableElement', ['$compile',
        function($compile) {
            return {
                template: '<div style="width:200px; height: 20px; background-color: red"><span ng-bind="contenutoEditor"></span></div>',
                restrict: 'E',
                link: function postLink(scope, element, attrs, ngModel) {
                    var enable = true;
                    var _data = {
                        id: 1
                    };
                    scope.optsEditor = {
                        directionality: 'ltr',
                        plugins: 'code',
                        toolbar: 'styleselect bold italic print forecolor backcolor'
                    };
                    scope.contenutoEditor = 'Initial';
                    var ondblclick = function() {
                        if (enable) {
                            var myDiv = element.find('div');
                            var content = myDiv.html();
                            myDiv.hide();
                            console.log('content', content);
                            scope.fromone = scope.contenutoEditor;
                            var newHtml = '<p ng-bind="fromone"></p>';
                            var el = angular.element(newHtml);
                            var l = $compile(el);
                            element.append(el);
                            l(scope);
                            scope.$apply();
                        } else {
                            element.find('div').show();
                            element.find('.editorEl').remove();
                            element.find('.mce-tinymce').remove();
                            console.log('.mce-tinymce.length', element.find('.mce-tinymce').length);
                            var contenuto = tinymce.get('elemento' + _data.id).getContent();
                            console.log('contenuto chiusura: ', contenuto);
                            console.log('contenuto chiusura x: ', scope.x);
                        }
                        enable = !enable;
                    };
                    element.on('dblclick', ondblclick);
                }
            };
        }
    ]);
