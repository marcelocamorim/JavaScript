// 🚀 Exercícios — Padrão Factory Method (nível intermediário → avançando)
/*
Exercício 5 – Sistema de Pagamentos

Crie:
PagamentoCredito (método processar() → “Pagamento no crédito aprovado”)

PagamentoDebito (método processar() → “Pagamento no débito aprovado”)

PagamentoPix (método processar() → “Pagamento via Pix aprovado”)

Crie PagamentoFactory com o método criarPagamento(tipo) e teste criando pagamentos diferentes.

Desafio extra:
Adicione um método executarPagamento(valor) que mostra também o valor pago.
*/

class PagamentoCredito{

    processar(){
        console.log(`pagamento no crédito aprovado`)
    }
}
class PagamentoDebito{

    processar(){
        console.log(`pagamento no Débito aprovado`)
    }
}
class PagamentoPix{

    processar(){
        console.log(`pagamento no Pix aprovado`)
    }
}


class PagamentoFactory{
    static criarPagamento(tipo){
        switch(tipo){
            case "credito": return new PagamentoCredito()
            case "debito": return new PagamentoDebito()
            case "pix": return new PagamentoPix()
            default: throw new Error(`Pagamento ${tipo} indisponivel`)
            
        }
    }
}

const c1 = PagamentoFactory.criarPagamento("credito")
const d1 = PagamentoFactory.criarPagamento("debito")
const p1 = PagamentoFactory.criarPagamento("pix")
c1.processar()
d1.processar()
p1.processar()