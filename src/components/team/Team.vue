<template>
  <div class="team-container">
    <div class="image-container">
      <img src="../../assets/images/team.jpg" class="img-thumbnail img-header" alt="Umweltverschmutzung">
    </div>
    <div class="container d-flex justify-content-center align-items-center">
      <div class="text-center d-flex justify-content-center align-items-center Banner">
        <h1 class="text-white">
          DAS TEAM
        </h1>
      </div>
    </div>
    <div class="container team-container">
      <div class="row">
        <div class="col-9 team-text">
          <p>
            Im Vorstand: Torben Greve & Panya Putsathit & Anna Schwanhäußer
          </p>
        </div>
        <div class="col-3">
          <img src="../../assets/images/vorstand.jpg" alt="Vorstand">
        </div>
      </div>
      <div class="row">
        <div class="col-9 team-text">
          <p>
            Help for Future: Moritz Zahn & Samuel Nellessen
          </p>
        </div>
        <div class="col-3">
          <img src="../../assets/images/helpFF.jpg" alt="Help for Future">
        </div>
      </div>
      <div class="row">
        <div class="col-9 team-text">
          <p>
            Schwarm for Future: Mathias von Gemmingen, Oscar Jessen & Jeanette Krüger
          </p>
        </div>
        <div class="col-3">
          <img src="../../assets/images/schwarmff.jpg" alt="Schwarm for Future">
        </div>
      </div>
      <div class="row">
        <div class="col-9 team-text">
          <p>
            Projektmanagement & Online Marketing: Kathrin Kunzelmann
          </p>
        </div>
        <div class="col-3">
          <img src="../../assets/images/PM.jpg" alt="Projektmanagement" class="PM-Pic">
        </div>
      </div>
      <div class="row">
        <div class="col-9 team-text">
          <p>
            Fundraising: Moritz Ellenberg
          </p>
        </div>
        <div class="col-3">
          <img src="../../assets/images/fundraising.jpg" alt="Fundraising" class="PM-Pic">
        </div>
      </div>
      <div class="row">
        <div class="col-9 team-text">
          <p>
            Vernetzung For Future-Bündnis: Luize Heidemann
          </p>
        </div>
        <div class="col-3">
          <img src="../../assets/images/Vernetzung.jpg" alt="Vernetzung" class="PM-Pic">
        </div>
      </div>
      <div class="row">
        <div class="col-9 team-text">
          <p>
            Strategie & Kommunikation:
            <a href="https://catho.de/">Chris Schaumann (Extern)</a>
          </p>
        </div>
        <div class="col-3">
          <img src="../../assets/images/Strategie.jpg" alt="Strategie und Kommunikation" class="PM-Pic">
        </div>
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

  .Banner {
    top: 550px;
    height: 150px;
    width: 800px;
    background-color: #67bb7d;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 49px;
  }
  .team-container{
    margin-top:50px;
  }

  .team-text{
    text-align: left;
  }

  .PM-Pic{
    height: 200px;
    width: auto;
  }

  .img-header{
    height:70%;
    width:70%;
  }
</style>