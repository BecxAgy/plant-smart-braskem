// Colocar exemplo de botões pra teste

// <button id="download-pdf"> download </button>

// <button id="list-pdf"> list </button>

// #Importar a clase no index.html

// <script src="index.js"></script>

// #É necessário manter a lógica implementada no download, para que o arquivo seja baixado corretamente

function loadbutton() {
    const list = document.getElementById('list-pdf')
    list.onclick = async () => {
        try {
            const response = await fetch(
                'http://localhost:4000/api/googledrive/',
                {
                    method: 'GET',
                },
            )
            console.log(response)
        } catch (error) {
            console.error('Erro ao realizar a requisição:', error)
        }
    }
    // Obtém o ID do arquivo do parâmetro de consulta da URL
    const download = document.getElementById('download-pdf')
    download.onclick = async () => {
        try {
            const fileId = '1VaPags5MXixzANP8NuXH0A2KpwHj_yUT'
            console.log('Iniciando o download do pdf:' + fileId)
            const response = await fetch(
                `http://localhost:4000/api/googledrive/download/${fileId}`,
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
}

window.onload = loadbutton
