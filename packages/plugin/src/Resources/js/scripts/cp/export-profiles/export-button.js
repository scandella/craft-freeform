!function(){var a=$("#toolbar"),e=$('\n<div>\n  <div class="btn" id="quick-export" tabindex="1" role="combobox">\n    '.concat(Craft.t("freeform","Quick Export"),"\n  </div>\n</div>\n"));a.prepend(e),$("div.btn",e).on({click:function(){var a,e=$("#sidebar").find("li a[data-key].sel").data("key"),o=null;/^form:\d+/i.test(e)&&(o=parseInt(e.replace("form:",""))),$.ajax({url:Craft.getCpUrl("freeform/export/export-dialogue"),type:"get",data:{formId:o,isSpam:null!==(a=window.freeformSpamView)&&void 0!==a&&a},success:function(a){var e=$('<div id="export-modal-wrapper" class="modal fitted">');e.html(a);var o=$("#export-modal-wrapper"),t=new Garnish.Modal(e,{onHide:function(){setTimeout((function(){$("#export-modal-wrapper").remove(),$(".modal-shade").remove()}),10)},onShow:function(){var a=$("#export-modal-wrapper");$(".checkbox-select",a).each((function(){$(this).data("dragger")||($(this).data("dragger",!0),new Garnish.DragSort($("div",$(this)),{handle:".move",axis:"y"}))})),$(".btn.submit",a).on({click:function(){a.data("modal").hide()}}),$(".btn.cancel",a).on({click:function(){a.data("modal").hide()}}),$("select[name=form_id]",a).on({change:function(){var a=$(this).val();$(".form-field-list").addClass("hidden"),$(".form-field-list[data-id="+a+"]").removeClass("hidden")}})}});o.data("modal",t)}})}})}();