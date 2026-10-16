    <script>
        function loginUser() 
            let user = document.getElementById("username").value;
            let pass = document.getElementById("password").value;

            if (user === "admin" && pass === "1234") {
                document.getElementById("login").classList.add("hidden");
                document.getElementById("store").classList.remove("hidden");
            } else {
                document.getElementById("message").innerText =
                    "Invalid username or password!";
            }
        

        function buy(product) {
            document.getElementById("result").innerText =
                product + " selected successfully!";
        }

        function logout() {
            document.getElementById("store").classList.add("hidden");
            document.getElementById("login").classList.remove("hidden");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("message").innerText = "";
            document.getElementById("result").innerText = "";
        }
    </script>