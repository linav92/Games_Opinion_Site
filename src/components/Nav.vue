<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
     <div class="container-fluid">
       <router-link class="navbar-brand" to="/"><i class="fas fa-headset"></i> Games Opinion</router-link>      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="fas fa-home"></i> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/opiniones"><i class="fas fa-comments"></i> Opiniones</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin"> <i class="fas fa-users-cog"></i> Administracion</router-link>
          </li>
        </ul>
      </div>
     </div>
    </nav>
  </div>
</template>

<style scoped>

</style>