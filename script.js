/*==================================================
          GLASSMORPHISM ACCOMPLISHMENTS
===================================================*/

.glass-card{
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    background: rgba(255,255,255,0.04);

    border:1px solid rgba(255,255,255,.08);

    box-shadow:
    0 10px 40px rgba(0,0,0,.35);

    transition:.35s ease;
}

.glass-card:hover{

    transform:translateY(-8px);

    box-shadow:
    0 15px 45px rgba(25,213,227,.15);

}


/*======================================
Achievement Card
======================================*/

.achievement-card{

    background:rgba(255,255,255,.03);

    border:1px solid rgba(255,255,255,.08);

    border-radius:16px;

    padding:18px;

    transition:.35s ease;

    margin-bottom:18px;

}

.achievement-card:hover{

    transform:translateY(-4px);

    border-color:var(--main-color);

    background:rgba(255,255,255,.05);

}

.achievement-top{

    display:flex;

    justify-content:space-between;

    align-items:flex-start;

    gap:15px;

}

.achievement-card h4{

    font-size:1.7rem;

    color:white;

    margin-bottom:8px;

}

.year-tag{

    background:rgba(25,213,227,.12);

    color:var(--main-color);

    padding:7px 14px;

    border-radius:40px;

    font-size:1.2rem;

    font-weight:600;

    letter-spacing:.5px;

}

.details-btn{

    margin-top:18px;

    width:100%;

    padding:12px;

    border-radius:12px;

    cursor:pointer;

    font-size:1.35rem;

    background:transparent;

    color:var(--main-color);

    border:1px solid rgba(25,213,227,.35);

    transition:.3s;

}

.details-btn:hover{

    background:var(--main-color);

    color:#090121;

}


/*==================================
Glass Modal
===================================*/

.glass-modal{

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.45);

    display:flex;

    justify-content:center;

    align-items:center;

    visibility:hidden;

    opacity:0;

    transition:.35s ease;

    backdrop-filter:blur(10px);

    z-index:99999;

}

.glass-modal.active{

    visibility:visible;

    opacity:1;

}

.glass-content{

    width:min(720px,90%);

    background:rgba(17,17,40,.55);

    border:1px solid rgba(255,255,255,.08);

    backdrop-filter:blur(22px);

    border-radius:22px;

    padding:35px;

    animation:popup .35s ease;

    position:relative;

    box-shadow:0 20px 60px rgba(0,0,0,.45);

}

@keyframes popup{

from{

opacity:0;

transform:translateY(30px) scale(.95);

}

to{

opacity:1;

transform:translateY(0) scale(1);

}

}

.close-modal{

position:absolute;

top:18px;

right:24px;

font-size:32px;

cursor:pointer;

color:white;

transition:.3s;

}

.close-modal:hover{

color:var(--main-color);

}

#modalTitle{

font-size:2.7rem;

margin-bottom:8px;

}

#modalIssuer{

font-size:1.45rem;

color:var(--main-color);

margin-bottom:20px;

}

#modalDescription{

font-size:1.45rem;

line-height:1.9;

margin-bottom:22px;

color:#f1f1f1;

}


/*==================================
Skill Chips
===================================*/

.skill-chips{

display:flex;

flex-wrap:wrap;

gap:10px;

margin-bottom:25px;

}

.skill-chips span{

padding:8px 16px;

border-radius:40px;

font-size:1.2rem;

background:rgba(25,213,227,.12);

color:var(--main-color);

border:1px solid rgba(25,213,227,.25);

}


/*==================================
Certificate Buttons
===================================*/

.certificate-buttons{

display:flex;

flex-wrap:wrap;

gap:12px;

}

.certificate-buttons a{

padding:11px 18px;

border-radius:10px;

background:rgba(255,255,255,.05);

color:white;

border:1px solid rgba(255,255,255,.08);

transition:.3s;

font-size:1.3rem;

}

.certificate-buttons a:hover{

background:var(--main-color);

color:#090121;

transform:translateY(-3px);

}
