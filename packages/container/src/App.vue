<script setup>
import { onMounted } from "vue";
import { FWizard, FWizardStep } from "@fkui/vue";

onMounted(async () => {
    const response = await fetch("/api/hamta-uppgifter");
    const result = await response.json();

    /* Todo : Borde loopa ut flera uppgifter här */
    const importedUppgift1 = await import(result[0].url);
    const importedUppgift2 = await import(result[1].url);
    importedUppgift1.init("#expUppgift1");
    importedUppgift2.init("#expUppgift2");
});

function onBeforeNext() {
    console.log("Innan nästa steg i wizarden");
    console.log(document.getElementById("expUppgift2"));
}
</script>

<template>
    <main>
        <f-wizard header-tag="h2">
            <f-wizard-step key="steg1" title="Stegrubrik 1" :before-next="onBeforeNext">
                <div id="expUppgift1"></div>
            </f-wizard-step>
            <f-wizard-step key="complete" title="Du är klar"> Nu är du klar! :D </f-wizard-step>
        </f-wizard>
        <div id="expUppgift2"></div>
    </main>
</template>

<style scoped></style>
