<script setup>
import { onMounted } from "vue";
import { FWizard, FWizardStep } from "@fkui/vue";

onMounted(async () => {
    const response = await fetch("/api/hamta-uppgifter");
    const result = await response.json();

    /* Todo : Borde loopa ut flera uppgifter här */
    const importedUppgift = await import(result[0].url);
    importedUppgift.init("#expUppgift");
});
</script>

<template>
    <main>
        <f-wizard header-tag="h2">
            <f-wizard-step key="steg1" :use-error-list="false" title="Stegrubrik 1">
                <div id="expUppgift"></div>
            </f-wizard-step>
            <f-wizard-step key="complete" :use-error-list="false" title="Du är klar"> Nu är du klar! :D </f-wizard-step>
        </f-wizard>
    </main>
</template>

<style scoped></style>
