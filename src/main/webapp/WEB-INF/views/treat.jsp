<%@ page language="java" pageEncoding="UTF-8" %>

  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

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
          <img id="background_image" class="background_image" src="/images/2.treat/P2_1.png" alt="main image" />
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
          <div>
            <div>
              <img src="/images/2.treat/P2_2_1.png" alt="">
              <img src="/images/2.treat/P2_2_2.png" alt="">
            </div>
            <div>
              <img src="/images/2.treat/P2_3_1.png" alt="">
              <img src="/images/2.treat/P2_3_2.png" alt="">
            </div>
            <div>
              <img src="/images/2.treat/P2_4_1.png" alt="">
              <img src="/images/2.treat/P2_4_2.png" alt="">
            </div>
          </div>
          <div>
            <p class="fontRed"><span class="logo">Bonetta™</span> Volume</p>
            <p>Results may vary depending on the amount injected and the person’s skin.</p>
          </div>
        </div>

        <div class="sec2body grid_wrapp body2">
          <div class="flexRow">
            <div class="underLine"><span class="logo">Bonetta</span><br>
              Fine
            </div>
            <div class="underLine"><span class="logo">Bonetta</span><br>
              Volume
            </div>
            <div class="underLine"><span class="logo">Bonetta</span><br>
              Deep
            </div>
          </div>
          <div class="graphBox">
            <img src="/images/2.treat/P5.png" alt="">
            <table class="sec2table">
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
        </div>

        <div class="sec2body grid_wrapp body3">
          <h3>Injection Site</h3>
          <p><span class="logo">Bonetta</span> was designed for facial treatment and skin restoration
            That provides the highest satisfaction and safety.</p>
          <img src="/images/2.treat/P8.png">
        </div>
      </section>




    </div> <!-- container end -->
  </body>

  </html>