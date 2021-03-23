<template>
  <div class="team-container">
    <!--img-->
    <img src="../../assets/images/team.jpg" class="bigPic" alt="Hambacher Forst"/>

    <!--Green Banner-->
    <div class="container d-flex justify-content-center align-items-center position-absolute top-50% start-50 translate-middle">
      <div class="text-center d-flex justify-content-center align-items-center Banner mt-4">
        <h1 class="text-white">
          Das Team
        </h1>
      </div>
    </div>

    <div class="container facts pt-3 pb-1">
      <div class="row mx-auto block">
        <div class="col description-text align-l d-4 pt-5">
          <h4>Im Vorstand: </h4>
          <p>
            Torben Greve & Panya Putsathit & Anna Schwanhäußer
          </p>
        </div>
        <div class="col description-pic text-center">
          <img src="../../assets/images/vorstand.jpg" alt="Vorstand" class="site-pic">
        </div>
        <div class="dreieck"></div>
      </div>
      <div class="row mx-auto block">
        <div class="col description-pic text-center">
          <img src="../../assets/images/helpFF.jpg" alt="Help for Future" class="site-pic">
        </div>
        <div class="col description-text align-r">
          <h4>Help for Future: </h4>
          <p>
            Moritz Zahn & Samuel Nellessen
          </p>
        </div>
        <div class="dreieck2"></div>
      </div>
      <div class="row mx-auto block">
        <div class="col description-text d-4 align-l">
          <h4>Schwarm for Future:</h4>
          <p>
            Mathias von Gemmingen, Oscar Jessen & Jeanette Krüger
          </p>
        </div>
        <div class="col description-pic text-center">
          <img src="../../assets/images/schwarmff.jpg" alt="Schwarm for Future" class="site-pic">
        </div>
        <div class="dreieck"></div>
      </div>
      <div class="row mx-auto block">
        <div class="col description-pic text-center">
          <img src="../../assets/images/PM.jpg" alt="Projektmanagement" class="site-pic">
        </div>
        <div class="col description-text align-r">
          <h4>Projektmanagement & Online Marketing:</h4>
          <p>
            Kathrin Kunzelmann
          </p>
        </div>
        <div class="dreieck2"></div>
      </div>
      <div class="row m-3 block">
        <div class="col description-text align-l">
          <h4> Fundraising:</h4>
          <p>
            Moritz Ellenberg
          </p>
        </div>
        <div class="col description-pic text-center">
          <img src="../../assets/images/fundraising.jpg" alt="Fundraising" class="site-pic">
        </div>
        <div class="dreieck"></div>
      </div>
      <div class="row mx-auto block">
        <div class="col description-pic text-center">
          <img src="../../assets/images/Vernetzung.jpg" alt="Vernetzung" class="site-pic">
        </div>
        <div class="col description-text align-r">
          <h4>Vernetzung For Future-Bündnis:</h4>
          <p>
            Luize Heidemann
          </p>
        </div>
        <div class="dreieck2"></div>
      </div>
      <div class="row m-3 block">
        <div class="col description-text align-l">
          <h4> Strategie & Kommunikation: </h4>
          <p>
            <a href="https://catho.de/" class="linktext">Chris Schaumann (Extern)</a>
          </p>
        </div>
        <div class="col description-pic text-center">
          <img  src="../../assets/images/Strategie.jpg" alt="Strategie und Kommunikation" class="site-pic">
        </div>
        <div class="dreieck"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Team"
});
</script>

<style scoped>

  .team-container{
    margin-top:50px;
  }

  .linktext {
    color: #67bb7d;
    text-decoration: none;
  }

  .Banner {
    height: 100px;
    width: 800px;
    background-color: #67bb7d;
    box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 49px;
  }
  .align-r{
    text-align: right;
  }
  .align-l{
    text-align: left;
  }

  .bigPic{
    width: 1400px;
    height: auto;
    margin-top: -80px;
  }

  div.dreieck {
    width: 0;
    height: 0;
    padding: 0;
    margin-bottom: 10px;
    border-left: 1276px solid #67bb7d8a;
    border-right: 100px solid transparent;
    border-bottom: 10px solid transparent;
  }
  div.dreieck2 {
    width: 0;
    height: 0;
    padding: 0;
    margin-bottom: 10px;
    border-left: 20px solid transparent;
    border-right: 1276px solid #67bb7d8a;;
    border-bottom: 10px solid transparent;
  }

  .description-text {
    padding: 5%;
  }

  .description-pic{
    text-align: left;
    padding: 2%;
  }

  .facts {
    margin-top: 5%;
    background-color: #f5f5f5;
  }

  .site-pic {
    width: 550px;
    height: auto;
  }

  .block {
    background-color: white;
    margin-bottom: 50px;
  }


  @media (min-width: 320px) {
    .bigPic {
      width: 320px;
      height: auto;
      margin-top: 20px;
    }
    .site-pic {
      width: 266px;
      height: auto;
    }
    div.dreieck{
      border-left: 296px solid #67bb7d8a;
      border-right: 0 solid transparent;
      margin-bottom: 0;
    }
    div.dreieck2{
      border-right: 296px solid #67bb7d8a;
      border-left: 0 solid transparent;
      margin-bottom: 0;
    }
    .Banner{
       height: 50px;
       width: 800px;
     }
  }

  @media (min-width: 425px) {
    .bigPic {
      width: 425px;
      height: auto;
      margin-top: 40px;
    }
    .site-pic {
      width: 360px;
      height: auto;
    }
    div.dreieck{
      border-left: 351px solid #67bb7d8a;
      border-right: 0 solid transparent;
      margin-bottom: 0;
    }
    div.dreieck2{
      border-right: 401px solid #67bb7d8a;
      border-left: 0 solid transparent;
      margin-bottom: 0;
    }
    .Banner{
      height: 60px;
      width: 800px;
    }
  }

  @media (min-width: 768px) {
    .bigPic {
      width: 768px;
      height: auto;
      margin-top: 0;
    }
    div.dreieck{
      border-left: 696px solid #67bb7d8a;
      border-right: 0 solid transparent;
      margin-bottom: 0;
    }
    div.dreieck2{
      border-right: 696px solid #67bb7d8a;
      border-left: 0 solid transparent;
      margin-bottom: 0;
    }
    .Banner{
      height: 80px;
      width: 800px;
    }
  }

  @media (min-width: 992px) {
    .bigPic {
      width: 768px;
      height: auto;
      margin-top: 0px;
    }
    div.dreieck{
      border-left: 936px solid #67bb7d8a;
      border-right: 0 solid transparent;
      margin-bottom: 0;
    }
    div.dreieck2{
      border-right: 936px solid #67bb7d8a;
      border-left: 0 solid transparent;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1200px) {
    .bigPic {
      width: 1200px;
      height: auto;
    }
    div.dreieck{
      border-left: 1116px solid #67bb7d8a;
      border-right: 0 solid transparent;
      margin-bottom: 0;
    }
    div.dreieck2{
      border-right: 1116px solid #67bb7d8a;
      border-left: 0 solid transparent;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1400px) {
    .bigPic {
      width: 1400px;
      height: auto;
    }
    div.dreieck{
      border-left: 1296px solid #67bb7d8a;
      border-right: 0 solid transparent;
      margin-bottom: 0;
    }
    div.dreieck2{
      border-right: 1296px solid #67bb7d8a;
      border-left: 0 solid transparent;
      margin-bottom: 0;
    }
  }
</style>