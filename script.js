/* ==================================================
   หน้าโลโก้
================================================== */

/* ==================================================
   VIDEO → LOGO → WEBSITE
================================================== */

window.addEventListener("load", function () {

    const videoIntro = document.getElementById("video-intro");
    const introVideo = document.getElementById("intro-video");
    const intro = document.getElementById("intro");
    const tour = document.getElementById("tour");

    if (intro) intro.style.display = "none";
    if (tour) tour.style.display = "none";

    if (introVideo) {

        introVideo.addEventListener("ended", function () {

            // ซ่อนวิดีโอ
            videoIntro.style.display = "none";

            // แสดงหน้าโลโก้
            if (intro) {
                intro.style.display = "flex";
            }

          // รอให้ผู้ใช้กดปุ่ม "เริ่มสำรวจโรงเรียน"

        });

    }

});
function startSchoolTour() {

    const intro = document.getElementById("intro");
    const tour = document.getElementById("tour");

    if (intro) {
        intro.style.display = "none";
    }

    if (tour) {
        tour.style.display = "block";
    }

    // เข้า 360 หลักของโรงเรียน
    goMainHome();

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}

/* ==================================================
   Sakaeo School Virtual Tour
================================================== */


/* ==================================================
   เว็บไซต์โรงเรียน
================================================== */

function openSchoolWebsite() {

    window.open(
        "https://www.sakaeoschool.ac.th/",
        "_blank"
    );

}


/* ==================================================
   ซ่อนทุกหน้า
================================================== */

function hideAllPages() {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });

}


/* ==================================================
   แสดงหน้าหลักของเว็บไซต์
================================================== */

function showMainPage(pageID) {

    const currentPage = document.querySelector(".page.active");
    const nextPage = document.getElementById(pageID);

    if (!nextPage || currentPage === nextPage) {
        return;
    }

    // หน้าเดิมค่อย ๆ จางและเลื่อนลง
    if (currentPage) {
        currentPage.style.opacity = "0";
        currentPage.style.transform = "translateY(-10px)";
        currentPage.style.filter = "blur(5px)";
    }

    setTimeout(function () {

        hideAllPages();

        // หน้าใหม่เริ่มจากด้านล่าง + เบลอเล็กน้อย
        nextPage.classList.add("active");
        nextPage.style.opacity = "0";
        nextPage.style.transform = "translateY(12px)";
        nextPage.style.filter = "blur(4px)";

        requestAnimationFrame(function () {

            requestAnimationFrame(function () {

                nextPage.style.opacity = "1";
                nextPage.style.transform = "translateY(0)";
                nextPage.style.filter = "blur(0)";

            });

        });

    }, 350);

    window.scrollTo(0, 0);
}

/* ==================================================
   กลับหน้าหลัก
================================================== */

function goMainHome() {

    // กลับไปหน้า 360 หลักของโรงเรียน
    showMainPage("main-home");

    // รีเซ็ต 360 ของอาคารที่กำลังเปิดอยู่
    const buildingFrame = document.getElementById("building-panorama-frame");

    if (buildingFrame) {
        buildingFrame.src = "";
    }

    // โหลด 360 หน้าหลักของโรงเรียนใหม่
    const mainFrame = document.querySelector("#main-home iframe");

    if (mainFrame) {
        const mainPanoramaURL =
            "https://kuula.co/share/collection/7TRxW?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0";

        mainFrame.src = mainPanoramaURL + "&reload=" + Date.now();
    }

    // กลับไปด้านบนสุด
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}

/* ==================================================
   ข้อมูลอาคาร
==================================================

   places = สถานที่สำคัญภายในอาคาร

   สามารถเพิ่มได้ไม่จำกัด
   เช่น

   {
       image: "images/buildings/buildings3-2.jpg",
       name: "ห้องคอมพิวเตอร์",
       description: "รายละเอียด...",
       panorama: "building3/computer/index.html"
   }

================================================== */

const buildings = {


    "1": {

        name: "อาคาร 1",

        image: "images/buildings/buildings1.jpg",

        description:
            "กลุ่มสาระการเรียนรู้ภาษาไทย และ ห้องเรียนของนักเรียนห้องเรียนปกติ",
        panorama:
            "https://kuula.co/share/collection/7TQZz?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },


    "2": {

        name: "อาคาร 2",

        image: "images/buildings/buildings2.jpg",

        description:
            "กลุ่มสาระการเรียนรู้สังคมศึกษาศาสนาและวัฒนธรรม และ ห้องเรียนของนักเรียนห้องเรียนปกติ",
        panorama:
            "https://kuula.co/share/collection/7TQcq?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",


        places: []

    },


    "3": {

        name: "อาคาร 3",

        image: "images/buildings/buildings3.jpg",

        description:
            "กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี และห้องเรียนของนักเรียนห้องเรียนปกติ",
        panorama:
            "https://kuula.co/share/collection/7TQbB?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: [

            /*
            ตัวอย่างสถานที่สำคัญ

            ตอนนี้สามารถเปลี่ยนชื่อ
            รูป และรายละเอียดได้ภายหลัง
            */

            {
                image:
                    "images/buildings/buildings3-1.jpg",

                name:
                    "ห้องปฏิบัติการวิทยาศาสตร์ Science Laboratory 318",

                description:
                "ห้องปฏิบัติการวิทยาศาสตร์ สถานที่สำหรับให้นักเรียนได้ทดลองหรือศึกษาในการทำแลป",

                panorama:
                "https://kuula.co/share/collection/7TQZt?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0"
                    
            }

        ]

    },


    "4": {

        name: "อาคาร 4",

        image: "images/buildings/buildings4.jpg",

        description:
            "กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ และ ห้องเรียนพิเศษ Hub aducation ",
        panorama:
            "https://kuula.co/share/collection/7TQfh?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: [ {
                image:
                    "images/buildings/buildings4-1.jpg",

                name:
                    "กลุ่มบริหารงานงบประมาณ",

                description:
                    "รายละเอียดของสถานที่สำคัญที่ 1",

                panorama:
                    "building4/place1/index.html"
            },

            {
                image:
                    "images/buildings/buildings4-2.jpg",

                name:
                    "กลุ่มบริหารงานวิชาการ",

                description:
                    "รายละเอียดของสถานที่สำคัญที่ 2",

                panorama:
                    "building4/place2/index.html"
            },

            {
                image:
                    "images/buildings/buildings4-3.jpg",

                name:
                    "สำนักงานบริหารงานบุคคล",

                description:
                    "รายละเอียดของสถานที่สำคัญที่ 3",

                panorama:
                    "building4/place3/index.html"
            },

        ]

    },


    "5": {

        name: "อาคาร 5",

        image: "images/buildings/buildings5.jpg",

        description:
            "กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี(คอมพิวเตอร์) และ กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา ห้องเรียนพิเศษ Computer Science",
        panorama:
                "https://kuula.co/share/collection/7TzRY?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=-0",

        places: [
            {
                image:
                    "images/buildings/buildings5-1.jpg",

                name:
                    "ห้องโสต",

                description:
                    "สถานที่ใช้จัดกิจกรรมและจัดการประชุม",

                panorama:
                    "https://kuula.co/share/collection/7TQpZ?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=-0"
            },
        ]

    },


    "6": {

        name: "อาคาร 6",

        image: "images/buildings/buildings6.jpg",

        description:
                    "ห้องเรียนพิเศษ STEM และ ห้องเรียนพิเศษ SMTE",
        panorama:
                 "https://kuula.co/share/collection/7Tyhz?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=-0",
                    

        places: [ {
                image:
                    "images/buildings/buildings6-1.jpg",

                name:
                    "ห้องมัลติมีเดีย Multimedia room",

                description:
                    "สถานที่ใช้จัดกิจกรรมหรือจัดการประชุม",

                panorama:
                    "https://kuula.co/share/collection/7Tzgd?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=-0"
            },

        ]

    },


    "7": {

        name: "อาคาร 7",

        image: "images/buildings/buildings7.jpg",

        description:
            "กลุ่มสาระการเรียนรู้ศิลปะ ห้องเรียนพิเศษ Mini English Program และ ห้องเรียนพิเศษ Pre-Communication Art",
        panorama:
             "https://kuula.co/share/collection/7TQp3?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=-0",

        places: []

    },


    "8": {

        name: "อาคาร 8",

        image: "images/buildings/buildings8.jpg",

        description:
            "กลุ่มสาระการเรียนรู้คณิตศาสตร์ และ ห้องเรียนพิเศษ Top Star",
        panorama:
            "https://kuula.co/share/collection/7TQML?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },


    "9": {

        name: "หอประชุมบุญเล็ก",

        image: "images/buildings/buildings9.jpg",

        description:
            "ด้านล่างเป็นโซนขายของทานเล่น และ ด้านบนเป็นห้องประชุม",
        panorama:
             "https://kuula.co/share/collection/7TQMW?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },


    "10": {

        name: "โดม ร.10",

        image: "images/buildings/buildings10.jpg",

        description:
            "สถานที่สำหรับใช้ทำกิจกรรมต่างๆ เช่น เข้าแถวเคารพธงชาติ จัดกิจกรรมประกวดต่างๆ",
        panorama:
            "https://kuula.co/share/collection/7TQMw?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1s&thumbs=0",

        places: []

    },


    "11": {

        name: "โดมดอกแก้ว",

        image: "images/buildings/buildings11.jpg",

        description:
            "สถานที่สำหรับใช้จัดกิจกรรมต่างๆ นักเรียนนิยมเล่นกีฬาแบดมินตันหรือปิงปอง",
        panorama:
            "https://kuula.co/share/collection/7TQC1?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },


    "13": {

        name: "โรงอาหาร",

        image: "images/buildings/buildings13.jpg",

        description:
            "โซนขายอาหาร และ รับประทานอาหาร",
        panorama:
            "https://kuula.co/share/collection/7TQT5?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },


    "14": {

        name: "ห้องสมุด",

        image: "images/buildings/buildings14.jpg",

        description:
            "สถานที่จัดกิจกรรมต่างๆ นักเรียนสามารถไปอ่านหนังสือหรือขอยืมหนังสือได้",
        panorama:
            "https://kuula.co/share/collection/7TQDj?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },


    "15": {

        name: "อาคารอุตสาหกรรม",

        image: "images/buildings/buildings15.jpg",

        description:
            "กลุ่มสาระการเรียนรู้การงานอาชีพ ใช้ทำการเรียนการสอนนักเรียนทั้งการปฏิบัติ และเรียนรู้",
        panorama:
           "https://kuula.co/share/collection/7TQgd?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: [{
                
            image:
                    "images/buildings/buildings15-1.jpg",
            
                name:
                    "สวนเกษตร",

                description:
                    "สวนองุ่นอาคารคหกรรม ปลอดสาร ปลูกโดยคุณครูกลุ่มสาระการเรียนรู้การงานอาชีพเพื่อให้นักเรียนได้ศึกษา ",

                panorama:
                    "building15/place3/index.html"
            },]

    },


    "16": {

        name: "จิตละมุน",

        image: "images/buildings/buildings16.jpg",

        description:
            "กิจกรรมแนะแนว งานแนะแนวโรงเรียนสระแก้ว แนะแนวการศึกษาต่อ ทุนการศึกษาต่อเนื่อง กองทุนเพื่อการกู้ยืม(กยศ.)",
        panorama:
            "https://kuula.co/share/collection/7TQDR?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },


    "17": {

        name: "สำนักงานผู้อำนวยการ",

        image: "images/buildings/buildings17.jpg",

        description:
            "สำนักงานผู้อำนวยการ อาคารภูมิเขต",
        panorama:
            "https://kuula.co/share/collection/7TQdG?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },


    "20": {

        name: "เรือนปกครอง",

        image: "images/buildings/buildings20.jpg",

        description:
            "คุณครูฝ่ายปกครอง",
        panorama:
            "https://kuula.co/share/collection/7TQsq?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },


    "21": {

        name: "สหกรณ์",

        image: "images/buildings/buildings21.jpg",

        description:
            "ร้านค้าขายของภายในโรงเรียน เช่น ขนม ของใช้ เครื่องแบบนักเรียน ครบครัน",
        panorama:
            "https://kuula.co/share/collection/7TQVv?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },

    "22": {

        name: "ห้องสื่อมัลติมีเดีย",

        image: "images/buildings/buildings6-1.jpg",

        description:
            "ห้องจัดกิจกรรมต่างๆ หรือห้องจัดประชุม",
        panorama:
            "https://kuula.co/share/collection/7Tzgd?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    },

     "23": {

        name: "ห้องโสต",

        image: "images/buildings/buildings5-1.jpg",

        description:
            "ห้องจัดกิจกรรมต่างๆ หรือห้องจัดประชุม",
        panorama:
            "https://kuula.co/share/collection/7TQpZ?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&initload=1&thumbs=0",

        places: []

    }

}


/* ==================================================
   อาคารปัจจุบัน
================================================== */

let currentBuilding = null;


/* ==================================================
   สถานที่สำคัญปัจจุบัน
================================================== */

let currentPlace = null;


/* ==================================================
   เปิด 360 อาคาร
================================================== */

function openBuilding(id) {

    const building =
        buildings[id];

    if (!building) {

        console.log(
            "ไม่พบข้อมูลอาคาร:",
            id
        );

        return;

    }


    currentBuilding = id;

    currentPlace = null;


    /* ชื่ออาคาร */

    const buildingName =
        document.getElementById(
            "current-building-name"
        );

    if (buildingName) {

        buildingName.textContent =
            building.name;

    }


    /* เปิด 360 อาคาร */

    const panoramaFrame =
    document.getElementById("building-panorama-frame");

if (panoramaFrame && building.panorama) {
    panoramaFrame.src = building.panorama;
}


    hideAllPages();


    const panoramaPage =
        document.getElementById(
            "building-panorama"
        );

    if (panoramaPage) {

        panoramaPage.classList.add(
            "active"
        );

    }


    window.scrollTo(0, 0);

}

        /* ==================================================
   เปิดหน้ารายละเอียดอาคาร
================================================== */

function showBuildingInfo() {

    if (!currentBuilding) {
        return;
    }

    const building = buildings[currentBuilding];

    /* ==============================
       ชื่ออาคาร
    ============================== */

    const title =
        document.getElementById("building-info-title");

    if (title) {
        title.textContent =
            "📋 " + building.name;
    }


    /* ==============================
       กล่องรายละเอียด
    ============================== */

    const detailList =
        document.getElementById("building-detail-list");

    if (!detailList) {
        console.log("ไม่พบ building-detail-list");
        return;
    }


    /* ล้างข้อมูลเก่าทุกครั้ง */

    detailList.innerHTML = "";


    /* ==============================
       รูปหลักของอาคาร
    ============================== */

    const mainCard =
        document.createElement("div");

    mainCard.className =
        "building-main-detail";


    const mainImage =
        document.createElement("img");

    mainImage.src =
        building.image;

    mainImage.alt =
        building.name;

    mainImage.className =
        "building-main-image";


    const mainName =
        document.createElement("h2");

    mainName.textContent =
        building.name;


    const mainDescription =
        document.createElement("p");

    mainDescription.textContent =
        building.description;


    mainCard.appendChild(mainImage);
    mainCard.appendChild(mainName);
    mainCard.appendChild(mainDescription);

    detailList.appendChild(mainCard);


    /* ==============================
       สถานที่สำคัญ
    ============================== */

    if (
        building.places &&
        building.places.length > 0
    ) {

        const heading =
            document.createElement("h2");

        heading.className =
            "important-places-title";

        heading.textContent =
            "📍 สถานที่สำคัญภายในอาคาร";

        detailList.appendChild(heading);


        /* สร้างทีละรูป */

        building.places.forEach(
            function(place, index) {

                const card =
                    document.createElement("div");

                card.className =
                    "important-place-card";


                /* รูป */

                const image =
                    document.createElement("img");

                image.src =
                    place.image;

                image.alt =
                    place.name;

                image.className =
                    "important-place-image";


                /* ชื่อ */

                const name =
                    document.createElement("h3");

                name.textContent =
                    place.name;


                /* รายละเอียด */

                const description =
                    document.createElement("p");

                description.textContent =
                    place.description;


                /* ปุ่ม 360 */

                const button =
                    document.createElement("button");

                button.className =
                    "place-360-button";

                button.textContent =
                    "🌐 ดู 360 สถานที่นี้";


                button.onclick =
                    function() {

                        openPlacePanorama(index);

                    };


                /* ใส่ทุกอย่างลงการ์ด */

                card.appendChild(image);

                card.appendChild(name);

                card.appendChild(description);

                if (!["กลุ่มบริหารงานงบประมาณ", "กลุ่มบริหารงานวิชาการ","สำนักงานบริหารงานบุคคล","สวนองุ่นอาคารคหกรรม"].includes(place.name)) {
    card.appendChild(button);
}


                detailList.appendChild(card);

            }
        );

    }


    /* ==============================
       เปิดหน้ารายละเอียด
    ============================== */

    hideAllPages();

    const infoPage =
        document.getElementById("building-info");

    if (infoPage) {

        infoPage.classList.add("active");

    }


    window.scrollTo(0, 0);

}


/* ==================================================
   กลับไป 360 ของอาคาร
================================================== */

function goBuildingPanorama() {

    if (!currentBuilding) {

        return;

    }


    const building =
        buildings[currentBuilding];


    const buildingName =
        document.getElementById(
            "current-building-name"
        );


    if (buildingName) {

        buildingName.textContent =
            "🌀 " + building.name;

    }


    const panoramaFrame =
        document.getElementById(
            "building-panorama-frame"
        );


    if (panoramaFrame && building.panorama) {
    panoramaFrame.src = building.panorama;
}


    currentPlace = null;


    hideAllPages();


    document
        .getElementById(
            "building-panorama"
        )
        .classList.add(
            "active"
        );


    window.scrollTo(0, 0);

}


/* ==================================================
   กลับไปหน้าเลือกอาคาร
================================================== */

function goBuildingList() {

    hideAllPages();

    const buildingsPage =
        document.getElementById(
            "buildings"
        );

    if (buildingsPage) {

        buildingsPage.classList.add(
            "active"
        );

    }

    window.scrollTo(0, 0);

}
/* ==================================================
   เปิด 360 ของสถานที่สำคัญ
================================================== */

function openPlacePanorama(index) {

    if (!currentBuilding) {
        return;
    }

    const building = buildings[currentBuilding];

    if (!building || !building.places[index]) {
        return;
    }

    const place = building.places[index];

    currentPlace = index;

    const buildingName =
        document.getElementById("current-building-name");

    if (buildingName) {
        buildingName.textContent =
            "🌀 " + place.name;
    }

    const panoramaFrame =
        document.getElementById("building-panorama-frame");

    if (panoramaFrame) {
        panoramaFrame.src = place.panorama;
    }

    hideAllPages();

    const panoramaPage =
        document.getElementById("building-panorama");

    if (panoramaPage) {
        panoramaPage.classList.add("active");
    }

    window.scrollTo(0, 0);
}
document.addEventListener("mousemove", function(e) {

    const sections = [
        "#school-info",
        "#buildings",
        "#building-info",
        "#school-map",
        "#guide"
    ];

    sections.forEach(selector => {

        const section = document.querySelector(selector);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        section.style.setProperty("--mouse-x", x + "%");
        section.style.setProperty("--mouse-y", y + "%");

    });

});

/* ==================================================
   ระบบหมวดหมู่อาคาร
================================================== */

const buildingCategories = {

    building: {

        title: "อาคารและสถานที่",

        ids: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            14,
            15,
            16,
            17,
            20
        ]

    },


    food: {

        title: "อาหารและร้านค้า",

        ids: [
            13,
            21,
            9
        ]

    },


    activity: {

        title: "พื้นที่กิจกรรม",

        ids: [
            9,
            10,
            11,
            22,
            23
        ]

    }

};


/* ==================================================
   เปิดหมวด
================================================== */

function showBuildingCategory(category) {

    const categoryData =
        buildingCategories[category];


    if (!categoryData) {

        return;

    }


    const categoryBox =
        document.getElementById(
            "building-categories"
        );


    const categoryHeader =
        document.getElementById(
            "building-category-header"
        );


    const categoryTitle =
        document.getElementById(
            "building-category-title"
        );


    const buildingList =
        document.querySelector(
            "#buildings .building-list"
        );


    if (
        !categoryBox ||
        !categoryHeader ||
        !categoryTitle ||
        !buildingList
    ) {

        return;

    }


    /* ซ่อนหมวด */

    categoryBox.style.display =
        "none";


    /* แสดงหัวข้อหมวด */

    categoryHeader.style.display =
        "flex";


    categoryTitle.textContent =
        categoryData.title;


    /* กรองการ์ด */

    const buildingCards =
        buildingList.querySelectorAll(
            ".building-card"
        );


    buildingCards.forEach(function(card) {

        const onclickValue =
            card.getAttribute("onclick");


        if (!onclickValue) {

            card.style.display = "none";

            return;

        }


       const match =
    onclickValue.match(
        /openBuilding\((\d+)\)/
    );

        if (!match) {

            card.style.display = "none";

            return;

        }


        const buildingId =
            Number(match[1]);


        if (
            categoryData.ids.includes(
                buildingId
            )
        ) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });


    /* Animation */

    buildingList.classList.remove(
        "category-active"
    );


    void buildingList.offsetWidth;


    buildingList.classList.add(
        "category-active"
    );


    /* เลื่อนมาที่รายการ */

    buildingList.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* ==================================================
   กลับไปหน้าเลือกหมวด
================================================== */

function showAllBuildingCategories() {

    const categoryBox =
        document.getElementById(
            "building-categories"
        );


    const categoryHeader =
        document.getElementById(
            "building-category-header"
        );


    const buildingList =
        document.querySelector(
            "#buildings .building-list"
        );


    if (
        !categoryBox ||
        !categoryHeader ||
        !buildingList
    ) {

        return;

    }


    /* แสดงหมวด */

    categoryBox.style.display =
        "grid";


    /* ซ่อนหัวข้อ */

    categoryHeader.style.display =
        "none";


    /* แสดงอาคารทั้งหมด */

    const buildingCards =
        buildingList.querySelectorAll(
            ".building-card"
        );


    buildingCards.forEach(function(card) {

        card.style.display = "flex";

    });


    buildingList.classList.remove(
        "category-active"
    );


    /* กลับไปด้านบนของหน้าอาคาร */

    document
        .getElementById("buildings")
        ?.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}