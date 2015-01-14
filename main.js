      var currentPID;
      var currentCID;
      var currentCurrency;
      var currentPrice;

  $(function(){
    initialize();
    //alert("Welcome");
  });

  function initialize() {
        
        // 使用者點擊星星
        $('a').on('click', function(e){
          $('.table-responsive').show();
        });
        // Passing location to get results - End
  };
