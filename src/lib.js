import style from "./main.less";

export default {
   getStyle: function( _style_name){
      return _style_name + ' '+ style[_style_name];
   }

}