<script setup>
import { onMounted } from "vue";
import { FWizard, FWizardStep } from "@fkui/vue";

onMounted(async () => {
    // eslint-disable-next-line import/no-unresolved, import/extensions -- dynamic import
    const importedUppgift = await import("http://localhost:8081/uppgift1.js");
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
