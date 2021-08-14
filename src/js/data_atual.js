export function dataAtual() {
  let data = new Date(),
    dias = new Array(
      'Domingo',
      'Segunda-Feira',
      'Terça-Feira',
      'Quarta-Feira',
      'Quinta-Feira',
      'Sexta-Feira',
      'Sábado'
    )

  return (
    dias[data.getDay()] +
    ', ' +
    data.getDate() +
    '/' +
    ('0' + (data.getMonth() + 1)).slice(-2) +
    '/' +
    data.getFullYear() +
    ' ' +
    ('0' + (data.getHours() )).slice(-2) +
    ':' +
    ('0' + (data.getMinutes() )).slice(-2)
  )
}
