<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="css/lightgallery.css" />
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300" rel="stylesheet">


    <title>Ariza Films</title>
</head>

<body>

    <div class="container">
        <div class="nav">
            <!--<div class="menu-icon">
                <div class="icon" style="width:15px; margin:10px auto "></div>
                <div class="icon" style="width:35px; margin:10px auto"></div>
                <div class="icon" style="width:15px; margin:10px auto"></div>
            </div>-->
            <section class="links-container">
                <div class="lg-screen-links">
                    <a class="link" href="#home"><i class="">HOME |</i></a>
                    <a class="link" href="#photo"><i class="">PHOTO |</i></a>
                    <a class="link" href="#video"><i class="">VIDEO |</i></a>
                    <a class="link" href="#me"><i class="">CONTACT |</i></a>
                </div>
                <div class="sm-screen-links">
                    <a class="link" href="#home"><i class="material-icons md-36">home</i></a>
                    <a class="link" href="#photo"><i class="material-icons md-36">photo_library</i></a>
                    <a class="link" href="#video"><i class="material-icons md-36">person_outline</i></a>
                    <a class="link" href="#me"><i class="material-icons md-36">vibration</i></a>
                </div>
            </section>
        </div>

        <div class="page" id="home">

        </div>
        <div class="logo"></div>
        <div class="page" id="photo">
            <div id="portfolio">

                <div id="lightgallery">
                    </a>
                    <a href="images/cny.jpg">
                        <img src="images/cny.jpg">
                    </a>
                    <a href="images/nel.jpg">
                        <img src="images/nel.jpg">
                    </a>
                    <a href="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/23658871_241872113013221_4240252330192497793_n.jpg?oh=4bf85deee61ae877bd1a101dfae096aa&amp;oe=5A9145C7">
                        <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/23658871_241872113013221_4240252330192497793_n.jpg?oh=4bf85deee61ae877bd1a101dfae096aa&amp;oe=5A9145C7">
                    </a>
                    <a href="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/23622081_241872173013215_7840978061891844795_n.jpg?oh=fe82f38048269bf37cb6013b3ab92f59&amp;oe=5AD0FD61">
                        <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/23622081_241872173013215_7840978061891844795_n.jpg?oh=fe82f38048269bf37cb6013b3ab92f59&amp;oe=5AD0FD61">
                    </a>
                    <a href="images/horse.jpg">
                        <img src="images/horse.jpg">
                    </a>
                    <a href="images/stranger.jpg">
                        <img src="images/stranger.jpg">
                    </a>
                    <a href="images/driver.jpg">
                        <img src="images/driver.jpg">
                    </a>
                    <a href="images/boy.jpg">
                        <img src="images/boy.jpg">
                    </a>
                </div>
            </div>
        </div>

        <div class="page" id="video">
            <div id="player"></div>
        </div>
        <div class="page" id="me">
            <section class="about-me">
                <h1>
                    HELLO
                </h1>
                </h2><a href="mailto:arizafilms.info@gmail.com">E-MAIL</a></h2>

                <p class="p-square">
                    My name is David Ariza. I am a photographer and videographer based out of Brooklyn,NY. Ariza Films is a photo and video creator for couples, parents, and families who want to find a way to make those beautiful memories last forever. I like to capture
                    real natural moments and tell your story through stunning work of art that you will be able to look back on and have forever
                </p>


            </section>
        </div>
    </div>
    </div>

    <script language="javascript" type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
    <script language="JavaScript" src="js/functions.js" type="text/javascript"></script>
    <script src="js/lightgallery.min.js"></script>
    <script src="js/lg-thumbnail.min.js"></script>
    <script src="js/lg-fullscreen.min.js"></script>
    <script type="text/javascript">
        lightGallery(document.getElementById('lightgallery'), {
            thumbnail: true
        });
    </script>
    <script type="text/javascript">
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/player_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var tv,
            playerDefaults = {
                autohide: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                controls: 0,
                disablekb: 1,
                enablejsapi: 1,
                iv_load_policy: 3
            };
        var vid = [{
            'videoId': 'ZuVUjn_XEjE',
            'startSeconds': 0,
            'suggestedQuality': 'hd1080'

        }];


        function onYouTubePlayerAPIReady() {
            tv = new YT.Player('player', {
                events: {
                    'onReady': onPlayerReady,
                },
                playerVars: playerDefaults
            });
        }

        function onPlayerReady(e) {
            tv.loadVideoById(vid[0]);
            tv.playVideo();
            tv.setVolume(0);
        }
    </script>

</body>

</html>
