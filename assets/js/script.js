document.addEventListener('contextmenu', event => event.preventDefault()); // Nonaktifkan klik kanan

        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && (event.key === 'u' || event.key === 'U')) { // Ctrl + U
                event.preventDefault();
                alert('View Source Dinonaktifkan!');
            }

            if (event.ctrlKey && event.shiftKey && event.key === 'I') { // Ctrl + Shift + I
                event.preventDefault();
                alert('Inspect Element Dinonaktifkan!');
            }

            if (event.ctrlKey && event.shiftKey && event.key === 'C') { // Ctrl + Shift + C
                event.preventDefault();
                alert('Inspect Element Dinonaktifkan!');
            }

            if (event.ctrlKey && event.shiftKey && event.key === 'J') { // Ctrl + Shift + J
                event.preventDefault();
                alert('Console Dinonaktifkan!');
            }

            if (event.key === 'F12') { // F12
                event.preventDefault();
                alert('DevTools Dinonaktifkan!');
            }
        });

        (function() {
            let devtools = false;
            let element = new Image();
            Object.defineProperty(element, 'id', {
                get: function() {
                    devtools = true;
                    setTimeout(function() {
                        window.location.href = 'about:blank'; // Redirect jika DevTools terbuka
                    }, 100);
                }
            });

            console.log('%c', element);
        })();

        // Theme Switcher
        document.getElementById('blue-theme').addEventListener('click', function() {
            changeTheme('#0a192f', '#64ffda', '#112240');
        });

        document.getElementById('green-theme').addEventListener('click', function() {
            changeTheme('#1a2e1a', '#00ff00', '#2a3a2a');
        });

        document.getElementById('yellow-theme').addEventListener('click', function() {
            changeTheme('#2a2a1a', '#ffff00', '#3a3a2a');
        });

        document.getElementById('red-theme').addEventListener('click', function() {
            changeTheme('#2a1a1a', '#ff0000', '#3a2a2a');
        });

        function changeTheme(bgColor, accentColor, cardColor) {
            document.body.style.backgroundColor = bgColor;
            document.body.style.color = accentColor;

            // Mengubah warna background header dan footer
            document.getElementById('main-header').style.backgroundColor = cardColor;
            document.getElementById('main-footer').style.backgroundColor = cardColor;

            // Mengubah warna teks pada header, profile, project-item, dan footer
            document.querySelectorAll('header h1, .profile h2, #projects .project-item h3, footer p').forEach(element => {
                element.style.color = accentColor;
            });

            // Mengubah warna background pada achievements dan project-item
            document.querySelectorAll('#achievements ul li, #projects .project-item').forEach(element => {
                element.style.backgroundColor = cardColor;
            });

            // Mengubah warna border-left pada achievements
            document.querySelectorAll('#achievements ul li').forEach(element => {
                element.style.borderLeftColor = accentColor;
            });

            // Mengubah warna teks pada project-item a
            document.querySelectorAll('#projects .project-item a').forEach(element => {
                element.style.color = accentColor;
            });

            // Tidak mengubah warna tombol tema
            document.querySelectorAll('.theme-switcher button').forEach(button => {
                button.style.backgroundColor = button.id === 'blue-theme' ? '#64ffda' :
                                               button.id === 'green-theme' ? '#00ff00' :
                                               button.id === 'yellow-theme' ? '#ffff00' :
                                               button.id === 'red-theme' ? '#ff0000' : '';
                button.style.color = button.id === 'blue-theme' ? '#0a192f' :
                                     button.id === 'green-theme' ? '#000' :
                                     button.id === 'yellow-theme' ? '#000' :
                                     button.id === 'red-theme' ? '#fff' : '';
            });
        }