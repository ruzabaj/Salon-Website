<!-- Features -->
    <script>
        var menubtn = document.getElementById("menubtn");
        var sidenav = document.getElementById("sidenav");
        var menu = document.getElementById("menu");
        sidenav.style.right == "-250px";

        menubtn.onclick = function () {
            if (sidenav.style.right == "-250px") 
            {
                sidenav.style.right = "0px";
                menu.src = "images/close.png";
            }
            else{
                sidenav.style.right = "250px";
            menu.src = "images/menu.png";
            }
        }
    </script>