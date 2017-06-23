'use strict';

(function($){
  
  $(function() {
    var aa = '<div class="mlpor"style="width:99%;"><p>级别:<b style="margin-right:10%">普卡</b>职位:<b>服务经理</b></p><p>奖励积分余额:<b style="margin-right:10%">7000.00</b></p><p>购物积分余额 : <b style="margin-right:10%">2000.00</b></p><p>报单积分余额 : <b style="margin-right:10%">0.00</b></p><div class="mofyu"><ul><li>6970000</li><li>7080000</li><li id="lo">110000</li></ul></div><div class="mofyu"><ul><li>6870000</li><li>余单</li><li id="lo">10000</li></ul></div></div>';
    var datascource = {
      'name': 'ZA01010/何宝全[407/407人]',
      'title': aa,
	  'className':'atrb',
      'children': [
       { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb' ,
		
          'children': [
            { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb'  },
            { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb' ,
              'children': [
                { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb'  },
                { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb' }
              ]
            }
          ]
        },

        { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb' ,
		
          'children': [
            { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb'  },
            { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb' ,
              'children': [
                { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb'  },
                { 'name': 'ZA01010/何宝全[407/407人]', 'title': aa,'className':'atrb' }
              ]
            }
          ]
        },
       
      ]
    };
	
	
	

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title',
      'pan': true,
      'zoom': true
    });

  });
  
  
  
  
  
  

})(jQuery);
















                  










