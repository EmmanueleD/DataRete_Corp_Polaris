<script setup>
const data = {
  generale: [
    {
      key: "data",
      value: "24/03/2023",
    },
    {
      key: "modello",
      value: "string",
    },

    {
      key: "categoria_modello",
      value: "string",
    },
    {
      key: "ricavi_vendite",
      value: 111,
    },

    {
      key: "utile_netto",
      value: 111,
    },
    {
      key: "tot_attivo",
      value: 111,
    },
    {
      key: "tot_passivo",
      value: 111,
    },
    {
      key: "patrimonio_netto",
      value: 111,
    },
    {
      key: "tot_crediti",
      value: 111,
    },
    {
      key: "tot_debiti",
      value: 111,
    },
    {
      key: "tot_liquidita",
      value: 111,
    },
    {
      key: "debiti_su_fatturato",
      value: 111,
    },
    {
      key: "patrimonio_su_passivo",
      value: 111,
    },
    {
      key: "dipendenti",
      value: 111,
    },
    {
      key: "fascia_garanzia",
      value: "string",
    },
    {
      key: "classe_fdg",
      value: "string",
    },
    {
      key: "classe_dfka",
      value: "string",
    },
    {
      key: "probabilita_default",
      value: 111,
    },
    {
      key: "crif_score",
      value: 111,
    },

    // {
    //   data: "2023/03/03",
    //   modello: "string",
    //   categoria_modello: "string",
    //   ricavi_vendite: 111,
    //   utile_netto: 111,
    //   tot_attivo: 111,
    //   tot_passivo: 111,
    //   patrimonio_netto: 111,
    //   tot_crediti: 111,
    //   tot_debiti: 111,
    //   tot_liquidita: 111,
    //   debiti_su_fatturato: 111,
    //   patrimonio_su_passivo: 111,
    //   dipendenti: 111,
    //   fascia_garanzia: "string",
    //   classe_fdg: "string",
    //   classe_dfka: "",
    //   probabilita_default: 111,
    //   crif_score: 111,
    // },
  ],
  sp_attivo: [
    {
      tot_immobilizzazioni: 111,
      tot_immobilizzazioni_imm: 111,
      tot_immobilizzazioni_mat: 111,
      tot_immobilizzazioni_fin: 111,
      crediti_finanziari_breve: 111,
      crediti_finanziatori_oltre: 111,
      attivo_circolante: 111,
      totale_rimanenze: 111,
      crediti_vs_clienti_entro: 111,
      crediti_vs_clienti_oltre: 111,
      crediti_vs_controllate_entro: 111,
      crediti_vs_controllate_oltre: 111,
      crediti_vs_collegate_entro: 111,
      crediti_vs_collegate_oltre: 111,
      crediti_vs_controllanti_entro: 111,
      crediti_vs_controllanti_oltre: 111,
      crediti_vs_imprese_entro: 111,
      crediti_vs_imprese_oltre: 111,
      crediti_tributari_entro: 111,
      crediti_tributari_oltre: 111,
      crediti_importe_entro: 111,
      crediti_imposte_oltre: 111,
      crediti_altri_entro: 111,
      crediti_altri_oltre: 111,
      crediti_vs_soci: 111,
      tot_crediti_entro: 111,
      tot_crediti_oltre: 111,
      quarter_crediti_imposte: 111,
      tot_attivita_finanziarie: 111,
      tot_disponibilita_liquide: 111,
      tot_depositi_bancari: 111,
      tot_assegni: 111,
      tot_denaro_in_cassa: 111,
      ratei_e_riscontri: 111,
    },
  ],
  sp_passivo: [
    {
      capitale_sociale: 111,
      riserva_sovrapprezzo: 111,
      riserva_rivalutazione: 111,
      riserva_legale: 111,
      riserva_statutaria: 111,
      altre_riserve: 111,
      riserva_copertura_flussi: 111,
      riserva_negativita_portafoglio: 111,
      utile_perdita_a_nuovo: 111,
      utile_perdita_di_esercizio: 111,
      tot_fondi_rischi: 111,
      tot_fondi_rischi_tfr: 111,
      obbligazioni_entro: 111,
      obbligazioni_oltre: 111,
      obbligazioni_convert_entro: 111,
      obbligazioni_contert_oltre: 111,
      soci_finanziamento_entro: 111,
      soci_finanziamento_oltre: 111,
      banche_entro: 111,
      banche_a_lungo: 111,
      altri_finanziatori_entro: 111,
      altri_finanziatori_oltre: 111,
      acconti_entro: 111,
      acconti_oltre: 111,
      fornitori_entro: 111,
      fornitori_oltre: 111,
      titoli_di_credito_entro: 111,
      titoli_di_credito_oltre: 111,
      controllate_entro: 111,
      controllate_oltre: 111,
      collegate_entro: 111,
      collegate_oltre: 111,
      controllanti_entro: 111,
      controllanti_oltre: 111,
      imprese_entro: 111,
      imprese_oltre: 111,
      tributari_entro: 111,
      tributari_oltre: 111,
      previdenza_entro: 111,
      previdenza_oltre: 111,
      debiti_entro: 111,
      debiti_oltre: 111,
      tot_debiti_entro: 111,
      tot_debiti_oltre: 111,
      ratei_e_riscontri: 111,
      tot_conti_ordine: 111,
    },
  ],
  conto_economico: [
    {
      valore_totale_produzione: 111,
      ricavi_vendite_prestazioni: 111,
      variazione_rimanenze: 111,
      variazione_lavori: 111,
      incrementi_immobili: 111,
      altri_ricavi: 111,
      contributi_conto_esercizio: 111,
      costi_produzione: 111,
      materie_prime_e_consumo: 111,
      servizi: 111,
      godimento_beni_terzi: 111,
      costi_personale: 111,
      tot_ammort_svalutazioni: 111,
      variazione_materiale: 111,
      accantonamento_rischi: 111,
      altri_accantonamenti: 111,
      oneri_di_gestione: 111,
      risultato_operativo: 111,
      valore_aggiunto: 111,
      proventi_oneri: 111,
      proventi_partecipate: 111,
      altri_proventi: 111,
      oneri_finanziari: 111,
      rettifiche_finanziarie: 111,
      tot_rivalutazioni: 111,
      tot_svalutazioni: 111,
      tot_proventi_oneri_straordinari: 111,
      risultato_pre_imposte: 111,
      tot_imposte: 111,
      utile_perdita_esercizio: 111,
    },
  ],
}

function capitalizeWords(sentence) {
  let words = sentence.replace("_", " ")

  words = words[0].toUpperCase() + words.substr(1)

  return words
}
</script>

<template>
  <Card>
    <template #content>
      <TabView>
        <TabPanel header="General">
          <div class="w-full md:w-6 lg:w-4 px-2 h-auto">
            <DataTable :value="data.generale" responsiveLayout="scroll">
              <Column field="key" header="Titolo">
                <template #body="{ data }">
                  {{ capitalizeWords(data.key) }}
                </template>
              </Column>
              <Column field="value" header="Valore">
                <template #body="{ data }">
                  {{ data.value }}
                </template>
              </Column>
            </DataTable>
          </div>
        </TabPanel>
        <TabPanel header="SP Attivo">
          <div class="w-full px-2 h-auto" style="overflow-x: scroll">
            <DataTable :value="data.sp_attivo">
              <Column
                v-for="item in Object.keys(data.sp_attivo[0])"
                field="item"
                :header="capitalizeWords(item)"
              >
                <template #body="{ data }">
                  {{ data[item] }}
                </template>
              </Column>
            </DataTable>
          </div>
        </TabPanel>
        <TabPanel header="SP Passivo">
          <div class="w-full px-2 h-auto" style="overflow-x: scroll">
            <DataTable :value="data.sp_passivo">
              <Column
                v-for="item in Object.keys(data.sp_passivo[0])"
                field="item"
                :header="capitalizeWords(item)"
              >
                <template #body="{ data }">
                  {{ data[item] }}
                </template>
              </Column>
            </DataTable>
          </div>
        </TabPanel>
        <TabPanel header="Conto Economico">
          <div class="w-full px-2 h-auto" style="overflow-x: scroll">
            <DataTable :value="data.conto_economico">
              <Column
                v-for="item in Object.keys(data.conto_economico[0])"
                field="item"
                :header="capitalizeWords(item)"
              >
                <template #body="{ data }">
                  {{ data[item] }}
                </template>
              </Column>
            </DataTable>
          </div>
        </TabPanel>
      </TabView>
    </template>
  </Card>
</template>
