Feature: Teste no BugerEats

    Background: Inicio        
        Given que acesso a página Home do BugerEats
        And que aciono o botão Cadastra-se para fazer entregras

    @valido
    Scenario Outline: Testes válidos
        And informo os dados Nome Completo, CPF, Email e Whatsaap
        And infomo o Enderco válido
        And seleciono o '<metodo_entrega>' do condutor
        And seleciono a foto da CNH
        When aciono o botão Cadastra-se para fazer entregas
        Then é exibido a modal com a mensagem '<mensagem_sucesso>'

        Examples: Massa de dados
        | metodo_entrega | mensagem_sucesso                                                                                     |
        | moto           | Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.  |
        | bicicleta      | Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.  |   
        | Van/Carro      | Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.  |   

    @invalido
    Scenario Outline: Testes Inválido
        And não informo os dados Nome Completo
        And infomo o Enderco válido
        And seleciono o '<metodo_entrega>' do condutor
        And seleciono a foto da CNH
        When aciono o botão Cadastra-se para fazer entregas
        Then é exibido a mensagem "É necessário informar o nome"

        Examples: Massa de dados
        | metodo_entrega | mensagem_sucesso                                                                                     |
        | moto           | Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.  |
