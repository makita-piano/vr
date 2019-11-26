<template>
  <div>
    <VApp>
      <VCard class="overflow-hidden">
        <VAppBar
          dark
        >
          <VAppBarNavIcon />

          <VToolbarTitle>vrgames-index</VToolbarTitle>

          <VSpacer />

          <VBtn icon>
            <VIcon>mdi-magnify</VIcon>
          </VBtn>
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
