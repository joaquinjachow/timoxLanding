export type TablaProducto = {
  headers: string[]
  rows: string[][]
  unidadesPorCaja?: string
}

export const tablasData: Record<string, TablaProducto> = {
  "discos de corte para máquina sensitiva": {
    headers: ["Código", "Medidas", "U.V."],
    rows: [
      ["TXCF3553.0", "355,0 x 3,0 x 25,4", "1"],
      ["TXCF4053.0", "405,0 x 3,0 x 25,4", "1"],
    ],
    unidadesPorCaja: "25",
  },
  "discos de corte plano": {
    headers: ["Código", "Medidas", "U.V.", "Unidades por caja"],
    rows: [
      ["TXCP1151.0", "115,0 X 1,0 X 22,23", "1", "50"],
      ["TXCP1151.6", "115,0 x 1,60 x 22,23", "1", "50"],
      ["TXCP1801.6", "180,0 x 1,60 x 22,23", "1", "25"],
      ["TXCP2302.0", "230,0 x 2,00 x 22,23", "1", "25"],
    ],
  },
  "discos de desbaste": {
    headers: ["Código", "Medidas", "U.V."],
    rows: [["TXCD1156.0", "115,0 x 6,00 x 22,23", "1"]],
    unidadesPorCaja: "25",
  },
  "discos flap": {
    headers: ["Código", "Medidas", "U.V."],
    rows: [
      ["TXFAI11536", "115 x 22 grano 36", "1"],
      ["TXFAI11560", "115 x 22 grano 60", "1"],
      ["TXFAI11580", "115 x 22 grano 80", "1"],
      ["TXFAI115100", "115 x 22 grano 100", "1"],
      ["TXFAI115120", "115 x 22 grano 120", "1"],
    ],
    unidadesPorCaja: "20",
  },
  "discos diamantados": {
    headers: ["Código", "Medidas", "U.V."],
    rows: [
      ["TXDD2.07S", "115 x B 20/22.23 T2.0X SH 7mm", "1"],
      ["TXDD2.47S", "115 x B 20/22.23 T2.4X SH 7mm", "1"],
      ["TXDD1.85S", "110 x B 16/20 X T 1.8X SH 5mm", "1"],
    ],
    unidadesPorCaja: "50",
  },
  cadenas_acero_galvanizadas: {
    headers: ["Código", "No", "Peso (Kg)", "U.V."],
    rows: [
      ["TXC20", "20", "12,50", "1"],
      ["TXC30", "30", "12,50", "1"],
      ["TXC35", "35", "12,50", "1"],
      ["TXC40", "40", "12,50", "1"],
      ["TXC45", "45", "12,50", "1"],
      ["TXC50", "50", "12,50", "1"],
      ["TXC60", "60", "25,00", "1"],
      ["TXC70", "70", "25,00", "1"],
      ["TXC80", "80", "25,00", "1"],
      ["TXC90", "90", "25,00", "1"],
      ["TXC100", "100", "25,00", "1"],
      ["TXC110", "110", "25,00", "1"],
    ],
  },
  cables_acero_galvanizados: {
    headers: ["Código", "Diámetro (mm)", "Construcción", "Longitud (Metros)", "U.V."],
    rows: [
      ["TXCG1.6", "1,6", "6x7", "100", "1"],
      ["TXCG2", "2", "6x7", "100", "1"],
      ["TXCG3", "3", "6x7", "100", "1"],
      ["TXCG4", "4", "6x7", "100", "1"],
      ["TXCG5", "5", "6x7", "100", "1"],
      ["TXCG6", "6", "6x19", "100", "1"],
      ["TXCG7", "7", "6x19", "100", "1"],
      ["TXCG8", "8", "6x19", "100", "1"],
      ["TXCG9", "9", "6x19", "100", "1"],
      ["TXCG10", "10", "6x19", "100", "1"],
      ["TXCG11", "11", "6x19", "100", "1"],
      ["TXCG12", "12", "6x19", "100", "1"],
    ],
  },
  gancho_elevacion_ojo_pestillo: {
    headers: ["Código", "Capacidad (Tn)", "U.V."],
    rows: [
      ["TXGEOR12", "1/2", "1"],
      ["TXGEOR34", "3/4", "1"],
      ["TXGEOR1", "1", "1"],
      ["TXGEOR112", "1-1/2", "1"],
    ],
  },
  prensacables: {
    headers: ["Código", "Medida (mm)", "U.V."],
    rows: [
      ["TXP3", "3", "1"],
      ["TXP5", "5", "1"],
      ["TXP6", "6", "1"],
      ["TXP8", "8", "1"],
      ["TXP10", "10", "1"],
      ["TXP13", "13", "1"],
      ["TXP14", "14", "1"],
      ["TXP16", "16", "1"],
      ["TXP19", "19", "1"],
      ["TXP22", "22", "1"],
      ["TXP26", "26", "1"],
    ],
  },
  tensores_ojo_gancho: {
    headers: ["Código", "Medida (mm)", "U.V."],
    rows: [
      ["TXTOG6", "6", "1"],
      ["TXTOG8", "8", "1"],
      ["TXTOG10", "10", "1"],
    ],
  },
}