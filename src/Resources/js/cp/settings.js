"use strict";$(function(){var t=$("input[name='purge-toggle']").parents(".lightswitch");t.on({change:function(){var t=$("input",this).val();t||$("select#purge-value").val(0)}})});