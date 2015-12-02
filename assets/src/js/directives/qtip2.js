// not made by me.
// directive for qtip2
// look in tv controller for its usage
angular.module('myApp').directive('qtip', qtip);

function qtip() {
   return {
       restrict: 'A',
       scope : {
           qtipVisible : '='
       },
       link: function(scope, element, attrs) {
           var my = attrs.qtipMy || 'top center'
               , at = attrs.qtipAt || 'bottom center'
               , adjustMethod = attrs.qtipAdjustMethod
               , qtipClass = attrs.qtipClass || 'qtip'
               , content = attrs.qtipContent || attrs.qtip;

           if (attrs.qtipTitle) {
               content = {'title': attrs.qtipTitle, 'text': attrs.qtip};
           }

           $(element).qtip({
               content: content,
               position: {
                   my: my,
                   at: at,
                   target: element,
                   adjust: {
                       method: adjustMethod
                   }
               },
               hide: {
                   fixed : true,
                   delay : 100
               },
               style: qtipClass
           });

           if(attrs.qtipVisible) {
               scope.$watch('qtipVisible', function (newValue, oldValue) {
                   $(element).qtip('toggle', newValue);
               });
           }
       }
   }
}(window.jQuery);
