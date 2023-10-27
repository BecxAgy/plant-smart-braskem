import { api, requestConfig } from '../utils/config'

const getInterventions = async () => {
    const config = requestConfig('GET', null)

    try {
        const res = await fetch(api + '/spreadsheet', config)
            .then(res => res.json())
            .catch(err => err)

        return res.data
    } catch (err) {
        console.log(err)
    }
}

const downloadPdf = async fileId => {
    try {
        const response = await fetch(
            `http://plantsmart.kempetro.com.br/api/googledrive/download/${fileId}`,
            {
                method: 'GET',
            },
        )
        if (response.ok) {
            console.log(response.headers)
            const contentDisposition = await response.headers.get(
                'Content-Disposition',
            )

            if (contentDisposition) {
                const fileNameMatch =
                    contentDisposition.match(/filename="(.*?)"/)

                if (fileNameMatch && fileNameMatch[1]) {
                    // Remove underlines extras no final do nome do arquivo (se houver)
                    const fileName = fileNameMatch[1] /*.replace(/_$/, '')*/

                    // Obtém o blob do corpo da resposta
                    const pdfBlob = await response.blob()

                    // Cria um objeto URL temporário para o blob
                    const pdfUrl = URL.createObjectURL(pdfBlob)

                    // Cria um link de download programaticamente e simula um clique para iniciar o download
                    const a = document.createElement('a')
                    a.href = pdfUrl
                    a.download = fileName // Define o nome do arquivo para o download
                    a.click()

                    // Limpa o objeto URL após o download
                    URL.revokeObjectURL(pdfUrl)

                    console.log('Download bem-sucedido')
                } else {
                    console.error(
                        'Nome do arquivo não encontrado no header Content-Disposition',
                    )
                }
            } else {
                console.error(
                    'Header Content-Disposition não encontrado na resposta',
                )
            }
        } else {
            // Lidar com erros caso ocorram durante o download
            const error = await response.json()
            console.error(error)
        }
    } catch (error) {
        console.error('Erro ao realizar a requisição:', error)
    }
}

const interventionService = {
    getInterventions,
    downloadPdf,
}

export default interventionService
