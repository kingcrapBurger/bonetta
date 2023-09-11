<%@ page language="java" pageEncoding="UTF-8" %>

  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Index</title>

    <!-- css reset -->
    <link href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/font.css" />
    <link rel="stylesheet" href="css/header.css" />
    <link rel="stylesheet" href="css/common.css" />

    <script defer src="/js/index.js"></script>
    <!-- head 종료  -->
  </head>

  <body>
    <div class="container">
      <!-- section 1 -->
      <section id="sec1" class="sec1 grid_wrapp">
        <!-- header-->
        <%@ include file="WEB-INF/views/header/header.jsp" %>
          <img id="background_image" class="background_image" src="/images/P1_1.png" alt="main image" />
          <div class="title">
            <span class="quotationMarks markUp">&ldquo;</span>
            <h1><span>
                8-PHASE</span>
              <br /><span>
                HENM
                TECHNOLOGY</span>
            </h1>
            <span class="quotationMarks markDown">&rdquo;</span>
          </div>
      </section>

      <!-- box1 -->
      <section class="sec2">
        <div class="sec2body">
          <svg class="circle svgLeft" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            <circle cx="50%" cy="50%" r="60%" fill="none" stroke="#dadada" stroke-width="3" />
          </svg>
          <div class="imgBox imgLeft">
            <img src="/images/P1_2.jpg" class="imgCircle circle1" />
          </div>
          <div class="contentBox contentRight">
            <div id="subtitleBox1" class="subtitleBox fadeReadyBox">
              <img src="/images/icon_U.png" alt="" class="fadeReady1" />
              <h3 class="subtit txt-right margin-right fadeReady1">Unique HENM</h3>
              <h3 class="subtit txt-right fadeReady2">technology</h3>
            </div>
            <div class="leftPadding">
              <p class="txt-right bigText">
                The self-developed HENM Cross Link Technology is a
                state-of-the-art technology that allows hyaluronic acid to be
                highly viscous without adding BDDE, one of the filler&#39;s toxic
                substances.
              </p><br>
              <p class="txt-right bigText">
                Using HENM technology, Bonetta has significantly reduced
                product stability and side effects by completely removing
                metal ions and impurities that can be mixed into the filler
                process as well as BDDE.
              </p>
            </div>
          </div>
        </div>
        <!-- box2 -->
        <div class="sec2body">
          <div class="contentBox contentLeft">
            <div id="subtitleBox2" class="subtitleBox fadeReadyBox">
              <img src="/images/icon_8.png" alt="" class="fadeReady1">
              <h3 class="subtit margin-left txt-left fadeReady1">8-Phase High Function</h3>
              <h3 class="subtit txt-left fadeReady2">Process Technology</h3>
            </div>
            <div class="rightPadding">
              <p class="txt-left bigText">
                The production safety of the product has been enhanced through
                advanced process technology in stage 8. In particular, it
                minimizes impurities and endotoxins with &#39;de-ionization
                process&#39; and &#39;high purity Purified water process system&#39; to
                increase the purity of the product and minimize the risk of
                side effects.
              </p>
            </div>
          </div>
          <div class="imgBox imgRight">
            <svg class="circle svgRight" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
              <circle cx="90%" cy="50%" r="60%" fill="none" stroke="#dadada" stroke-width="3" />
            </svg>
            <img src="/images/P1_3.jpg" class="imgCircle circle2" />
          </div>
        </div>
        <!-- box3 -->
        <div class="sec2body">
          <div class="imgBox imgLeft">
            <svg class="circle svgLeft" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
              <circle cx="50%" cy="50%" r="60%" fill="none" stroke="#dadada" stroke-width="3" />
            </svg>
            <img src="/images/P1_4.jpg" class="imgCircle circle3" />
          </div>
          <div class="contentBox contentRight">
            <div id="subtitleBox3" class="subtitleBox fadeReadyBox">
              <img src="/images/icon_G.png" alt="" class="fadeReady1">
              <h3 class="subtit txt-right margin-right fadeReady1">Global product</h3>
              <h3 class="subtit txt-right fadeReady2">Global product</h3>
            </div>
            <div class="leftPadding">
              <p class="txt-right bigText">
                Bonetta averaged 20% higher HA content than other products and
                23.3% more robust liquidity and retention of famous filler
                products overseas. HENM bridge technology is proof that it is
                a globally competitive technology.
              </p>
            </div>
          </div>
        </div>
        <!-- box4 -->
        <div class="sec2body">
          <div class="contentBox contentLeft">
            <div id="subtitleBox4" class="subtitleBox fadeReadyBox">
              <img src="/images/icon_I.png" alt="" class="fadeReady1">
              <h3 class="subtit txt-left fadeReady1">injection pressure</h3>
              <h3 class="subtit margin-left txt-left fadeReady2">Stable and constant</h3>
            </div>
            <div class="rightPadding">
              <p class="txt-left bigText">
                The jagged injection pressure interferes with the procedure’s
                delicate techniques and causes pain. Bonetta is a high-purity
                and sophisticated bridge technology, showing stable and
                constant injection pressure compared to famous overseas
                fillers.
              </p>
            </div>
          </div>
          <div class="imgBox imgRight">
            <svg class="circle svgRight" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
              <circle cx="90%" cy="50%" r="60%" fill="none" stroke="#dadada" stroke-width="3" />
            </svg>
            <img src="/images/P1_5.jpg" class="imgCircle circle4" />
          </div>
        </div>
      </section>
      <!-- section 3 -->
      <section class="sec3 grid_wrapp">
        <div class="greyBox"></div>
        <div class="quotationMarks markUp txt-center">&ldquo;</div>
        <div class="sec3ContentBox">
          <h3 class="subtit">Minimize BDDE residue</h3>
          <br>
          <p class="bigText">
            BDDE ( Butane Diol Diglycidyl Ether ) is a cross-linking agent
            used to cross-link hyaluronic acid. It is one of the components of
            HA fillers that provide elasticity by connecting the molecular
            structures of hyaluronic acid. However, since BDDE is a chemical
            component, it may cause an inflammatory reaction due to its
            toxicity. Excluding bacterial infection from the outside, it is
            the ingredient that causes the most inflammation that can occur
            during filler treatment.
          </p>
          <br>
          <p class="bigText">
            Bonetta uses HENM technology, a proprietary technology, to
            minimize BDDE to increase the purity of the HA filler
            Significantly reduced the inflammatory response.
          </p>
        </div>
        <div class="quotationMarks markDown">&rdquo;</div>
      </section>
      <!-- section 3 -->
      <section class="sec4 grid_wrapp">
        <div class="sec4body">
          <h3 class="subtit txt-center">
            <span class="logo">Bonetta </span>bdde test by HPLC analysis
          </h3>
          <div class="graph1">
            <div>
              <p class="txt-center">The maximum residual amount of
                BDDE according to MFDS</p>
              <img src="/images/P1_6-1.jpg" alt="">
              <div class="markBox">
                <div class="pinkMark">BDDE standard curve : 2ppm</div>
                <p class="txt-center">BDDE standard curve : 2ppm</p>
              </div>
            </div>
            <div>
              <p class="txt-center"><span class="logo">Bonetta</span> Fine</p>
              <img src="/images/P1_6-2.jpg" alt="">
              <div class="markBox">
                <div class="pinkMark">BDDE non-detection</div>
                <p class="txt-center">BDDE non-detection</p>
              </div>
            </div>
            <div>
              <p class="txt-center"><span class="logo">Bonetta</span> Deep</p>
              <img src="/images/P1_6-3.jpg" alt="">
              <div class="markBox">
                <div class="pinkMark">BDDE non-detection</div>
                <p class="txt-center">BDDE non-detection</p>
              </div>
            </div>
            <div>
              <p class="txt-center"><span class="logo">Bonetta</span> Volume</p>
              <img src="/images/P1_6-4.jpg" alt="">
              <div class="markBox">
                <div class="pinkMark">BDDE non-detection</div>
                <p class="txt-center">BDDE non-detection</p>
              </div>
            </div>
          </div>
        </div>

        <div class="sec4body">
          <h3 class="subtit txt-center">Excellent gel from retention</h3>
          <p class=" txt-center">
            Bonetta showed excellent results in gel form retention as a result
            of comparative testing with other global brand filler products.
          </p>
          <div class="graph2box">
            <ul class="graph2">
              <li> </li>
              <li class="fontRed txt-center"><span class="logo logoSmall">Bonetta</span><br>
                Volume</li>
              <li class="txt-center">A Product<br>
                Volume</li>
              <li class="txt-center">B Product<br>
                Volume</li>
            </ul>
          </div>
          <img src="/images/P1_7.png" alt="">
          <p class="txt-center">
            The gel of other products loses about 35%~45% of its shape in 2 hours,
            While Bonetta maintains about 80% of it at the same time.
          </p>
        </div>

        <div class="sec4body">
          <h3 class="subtit txt-center">Long-lasting Viscoelasticity</h3>
          <p class="txt-center">
            <span class="logo">Bonetta</span> maintains stable viscoelasticity even after a long time
            after injection.
          </p>
          <img src="/images/P1_8.png" alt="">
          <table class="sec4table1">
            <tr>
              <td id="row1cell">Rheological
                properties</td>
              <td class="fontRed">
                <span class="logo logoSmall">Bonetta</span><br>Volume
              </td>
              <td>Company A<br>
                R product</td>
              <td>Company B<br>
                J product</td>
              <td>Company C<br>
                N product</td>
              <td>Company D<br>
                R product</td>
            </tr>
            <tr>
              <td id="row2cell">Initial G&#39;(Pa)</td>
              <td class="fontRed">289.786</td>
              <td>483.858</td>
              <td>251.664</td>
              <td>304.024</td>
              <td>233.175</td>
            </tr>
            <tr>
              <td id="row3cell">24hours later
                G&#39;(Pa)</td>
              <td class="fontRed">90.9362</td>
              <td>0.132596</td>
              <td>18.3638</td>
              <td>0.857926</td>
              <td>93.5068</td>
            </tr>
          </table>
        </div>
        <div class="sec4body">
          <h3 class="subtit txt-center">Uniform & Stable extrusion force</h3>
          <p class="txt-center">
            Since Bonetta is a product that stably cross-links hyaluronic acid
            with its own technology and equipment, the molecular size is
            uniform, so the extrusion force is constant and pain is low.
          </p>
          <img src="/images/P1_9.png" alt="">
          <table class="sec4table1">
            <tr>
              <td id="row1cell">Extrusion Force</td>
              <td class="fontRed">
                <span class="logo logoSmall">Bonetta</span><br>Volume
              </td>
              <td>Company A<br>R product</td>
              <td>Company B<br>J product</td>
              <td>Company C<br>N product</td>
              <td>Company D<br>R product</td>
            </tr>
            <tr>
              <td id="row2cell">N</td>
              <td class="fontRed">15.75</td>
              <td>18.30</td>
              <td>8.13</td>
              <td>14.03</td>
              <td>15.89</td>
            </tr>
          </table>
        </div>

        <div class="sec4body">
          <h3 class="subtit txt-center">High content of hyaluronate</h3>
          <p class="txt-center">
            Bonetta has a high HA content that was obtained through HENM
            technology.
          </p>
          <img src="/images/P1_10.png" alt="">
          <table class="sec4table1">
            <tr>
              <td id="row1cell">HA Content</td>
              <td class="fontRed">
                <span class="logo logoSmall">Bonetta</span><br>Volume
              </td>
              <td>Company A<br>R product</td>
              <td>Company B<br>J product</td>
              <td>Company C<br>N product</td>
              <td>Company D<br>R product</td>
            </tr>
            <tr>
              <td id="row2cell">mg/mL</td>
              <td class="fontRed">24.36</td>
              <td>19.59</td>
              <td>20.48</td>
              <td>20.40</td>
              <td>24.21</td>
            </tr>
          </table>
        </div>


      </section>
    </div> <!-- container end -->
  </body>

  </html>
  </div>