app.controller
    ('AppController', 
        [
            function() {
                
                var vm = this;
                vm.nav = [
                   {
                    url:"#/",
                    title:"Home"
                   },{
                    url:"#/page",
                    title:"pagina"
                   }
                ];
                vm.ver = '1.0.0';
                vm.today = new Date();

            }
        ]
    );

