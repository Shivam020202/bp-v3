<!DOCTYPE html>
<html lang="en">
<head>
    <title>Client New - Branding Pioneers</title>

    <?php include '../partials/header-links.php'; ?>

    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

    <style>
        .iframe-section {
            margin-top: 4rem;
            width: 100%;
            height: 100vh;
        }
        .iframe-section iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>

<body>

    <?php include '../partials/navbar.php'; ?>

    <section class="iframe-section mt-16">
        <iframe 
            class="w-full h-[100vh]" 
            src="https://fill.boloforms.com/signature/ee809720-83b2-495c-9334-67309713c4a0?p=view" 
            width="100%" 
            height="100%" 
            name="BoloSign"
            frameborder="0"
            allowfullscreen
        ></iframe>
    </section>

    <?php include '../partials/footer.php'; ?>

    <!-- Include GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

</body>
</html>
