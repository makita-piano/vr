<template>
  <div>
    <VApp>
      <VCard class="overflow-hidden">
        <VAppBar
          dark
        >
          <VToolbarTitle>vrgames-index</VToolbarTitle>
        </VAppBar>
      </VCard>
      <VContent>
        <RouterView />
      </VContent>
      <VCard class="overflow-hidden">
        <VFooter
          dark
          padless
        >
          <VCardText class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} - <strong>vrgames-index</strong>
          </VCardText>
        </VFooter>
      </VCard>
    </VApp>
  </div>
</template>
