<%@ page language="java" pageEncoding="UTF-8" %>

  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Treat</title>

    <!-- css reset -->
    <link href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/font.css" />
    <link rel="stylesheet" href="css/header.css" />
    <link rel="stylesheet" href="css/treat.css" />

    <script defer src="/js/treat.js"></script>
    <!-- head 종료  -->
  </head>

  <body>
    <div class="container">
      <!-- section 1 -->
      <section id="sec1" class="sec1 grid_wrapp">
        <!-- header-->
        <%@ include file="header/header.jsp" %>
          <img id="background_image" class="background_image" src="/images/2.treat/P2_1.png" alt="main image"
            usemap="#imageMap" />
          <div id="clickBox">
            <a class="hotspot"
              data-content="Forehead <span class='fontRed'><span class='logo'>Bonetta</span> Volume</span>"></a>
            <a class="hotspot"
              data-content="Forehead <span class='fontRed'><span class='logo'>Bonetta</span> Volume</span>"></a>
            <a class="hotspot"
              data-content="Forehead <span class='fontRed'><span class='logo'>Bonetta</span> Volume</span>"></a>
            <a class="hotspot"
              data-content="Forehead <span class='fontRed'><span class='logo'>Bonetta</span> Volume</span>"></a>
            <a class="hotspot"
              data-content="Forehead <span class='fontRed'><span class='logo'>Bonetta</span> Volume</span>"></a>
            <a class="hotspot"
              data-content="Forehead <span class='fontRed'><span class='logo'>Bonetta</span> Volume</span>"></a>
            <a class="hotspot"
              data-content="Forehead <span class='fontRed'><span class='logo'>Bonetta</span> Volume</span>"></a>
            <a class="hotspot"
              data-content="Forehead <span class='fontRed'><span class='logo'>Bonetta</span> Volume</span>"></a>
            <a class="hotspot"
              data-content="Forehead <span class='fontRed'><span class='logo'>Bonetta</span> Volume</span>"></a>
          </div>
          <div class="title">
            <h1><span>
                Types of products
              </span>
              <span>
                for each part of the face</span>
            </h1>
          </div>
      </section>

      <section id="sec2">
        <div class="sec2body grid_wrapp body1">
          <div class="flexRow">
            <h4>before</h4>
            <h4>after</h4>
          </div>
          <div class="carousel">
            <ul class="carousel__list">
              <li class="carousel__item" data-pos="-1">
                <div class="before">
                  <img src="/images/2.treat/P2_2_1.png" alt="" class="content-image">
                </div>
                <div class="after">
                  <img src="/images/2.treat/P2_2_2.png" alt="" class="content-image">
                </div>
                <div class="scroller">
                  <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                    viewBox="0 0 100 100">
                    <polygon points="0 50 37 68 37 32 0 50" style="fill:#fff" />
                    <polygon points="100 50 64 32 64 68 100 50" style="fill:#fff" />
                  </svg>
                </div>
              </li>
              <li class="carousel__item" data-pos="0">
                <div class="before">
                  <img src="/images/2.treat/P2_3_1.png" alt="" class="content-image">
                </div>
                <div class="after">
                  <img src="/images/2.treat/P2_3_2.png" alt="" class="content-image">
                </div>
                <div class="scroller">
                  <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                    viewBox="0 0 100 100">
                    <polygon points="0 50 37 68 37 32 0 50" style="fill:#fff" />
                    <polygon points="100 50 64 32 64 68 100 50" style="fill:#fff" />
                  </svg>
                </div>
              </li>
              <li class="carousel__item" data-pos="1">
                <div class="before">
                  <img src="/images/2.treat/P2_4_1.png" alt="" class="content-image">
                </div>
                <div class="after">
                  <img src="/images/2.treat/P2_4_2.png" alt="" class="content-image">
                </div>
                <div class="scroller">
                  <svg class="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                    viewBox="0 0 100 100">
                    <polygon points="0 50 37 68 37 32 0 50" style="fill:#fff" />
                    <polygon points="100 50 64 32 64 68 100 50" style="fill:#fff" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p class="fontRed"><span class="logo logoSmall">Bonetta™</span> Volume</p>
            <p>Results may vary depending on the amount injected and the person’s skin.</p>
          </div>
        </div>

        <div class="sec2body grid_wrapp body2">
          <div class="flexRow">
            <div class="underLine" id="line1"><span class="logo logoBig">Bonetta</span><br>
              Fine
            </div>
            <div class="underLine" id="line2"><span class="logo logoBig">Bonetta</span><br>
              Volume
            </div>
            <div class="underLine" id="line3"><span class="logo logoBig">Bonetta</span><br>
              Deep
            </div>
          </div>
          <div class="slideWrapper">
            <ul class="slideContainer" id="slideContainer">
              <li class="slide">
                <div class="graphBox">
                  <img src="/images/2.treat/P5.png" alt="">
                  <table>
                    <tr>
                      <td class="grayCell">HA concentration</td>
                      <td>24mg/mL</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Lidocaine</td>
                      <td>0.3%</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Indications</td>
                      <td>Nasolabial folds, Deep wrinkles, Nose & Face contouring</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Injection site</td>
                      <td>Mid to deep dermis, Subcutaneous layer</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Packaging</td>
                      <td>1.1ml x 2 syringes</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Needle size</td>
                      <td>26G</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Duration</td>
                      <td>12~24 months</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Storage</td>
                      <td>2~25°C</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Shelf life</td>
                      <td>24 months</td>
                    </tr>
                  </table>
                </div>
                <div>
                  <p>It is a large molecule HA cross-linked filler with the largest particle
                    With larger molecules, powerful molding, volume, and facial contouring are
                    possible. It has high elasticity and lasts up to 24 months.</p>
                </div>
              </li>
              <li class="slide">
                <div class="graphBox">
                  <img src="/images/2.treat/test1.png" alt="">
                  <table>
                    <tr>
                      <td class="grayCell">HA concentration</td>
                      <td>24mg/mL</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Lidocaine</td>
                      <td>0.3%</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Indications</td>
                      <td>Nasolabial folds, Deep wrinkles, Nose & Face contouring</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Injection site</td>
                      <td>Mid to deep dermis, Subcutaneous layer</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Packaging</td>
                      <td>1.1ml x 2 syringes</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Needle size</td>
                      <td>26G</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Duration</td>
                      <td>12~24 months</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Storage</td>
                      <td>2~25°C</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Shelf life</td>
                      <td>24 months</td>
                    </tr>
                  </table>
                </div>
                <div>
                  <p>It is a large molecule HA cross-linked filler with the largest particle
                    With larger molecules, powerful molding, volume, and facial contouring are
                    possible. It has high elasticity and lasts up to 24 months.</p>
                </div>
              </li>
              <li class="slide">
                <div class="graphBox">
                  <img src="/images/2.treat/test2.png" alt="">
                  <table>
                    <tr>
                      <td class="grayCell">HA concentration</td>
                      <td>24mg/mL</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Lidocaine</td>
                      <td>0.3%</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Indications</td>
                      <td>Nasolabial folds, Deep wrinkles, Nose & Face contouring</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Injection site</td>
                      <td>Mid to deep dermis, Subcutaneous layer</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Packaging</td>
                      <td>1.1ml x 2 syringes</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Needle size</td>
                      <td>26G</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Duration</td>
                      <td>12~24 months</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Storage</td>
                      <td>2~25°C</td>
                    </tr>
                    <tr>
                      <td class="grayCell">Shelf life</td>
                      <td>24 months</td>
                    </tr>
                  </table>
                </div>
                <div>
                  <p>It is a large molecule HA cross-linked filler with the largest particle
                    With larger molecules, powerful molding, volume, and facial contouring are
                    possible. It has high elasticity and lasts up to 24 months.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="sec2body grid_wrapp body3">
          <h3>Injection Site</h3>
          <p><span class="logo logoSmall">Bonetta</span> was designed for facial treatment and skin restoration
            That provides the highest satisfaction and safety.</p>
          <div class="skinBox">
            <img src="/images/2.treat/P8.png" id="skin_image">
            <div class="noteLeft">
              <div class="leftInbox">
                <p><span class="fontRed"><span class="logo logoSmall">Bonetta</span> Fine</span><br>
                  Superficial to mid dermis</p>
                <svg height="75" width="150">
                  <polyline points="150,0 0,0 0,75 150,75" stroke="rgba(0,0,0,1)" fill="none" stroke-width="2">
                  <circle x="" y="" ></circle>
                  <circle ></circle>
                </svg>
              </div>
              <div class="leftInbox">
                <p><span class="fontRed"><span class="logo logoSmall">Bonetta</span> Deep</span><br>
                  Mid to deep dermis</p>
                  <img src="/images/2.treat/skin02.svg">
              </div>
              <div class="leftInbox">
                <p><span class="fontRed"><span class="logo logoSmall">Bonetta</span> Volume</span><br>
                  Subcutaneous layer</p>
                  <img src="/images/2.treat/skin02.svg">
              </div>
            </div>
            <div class="noteRight">
              <div class="rightInbox">
                <img src="/images/2.treat/skin01.svg">
                <p>Epidermis</p>
              </div>
              <div class="rightInbox">
                <img src="/images/2.treat/skin01.svg">
                <p>Dermis</p>
              </div>
              <div class="rightInbox">
                <img src="/images/2.treat/skin01.svg">
                <p>Subcutaneous layer</p>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div> <!-- container end -->
  </body>

  </html>