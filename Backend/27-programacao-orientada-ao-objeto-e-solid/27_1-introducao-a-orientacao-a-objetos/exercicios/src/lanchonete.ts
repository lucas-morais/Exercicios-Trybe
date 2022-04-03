
class Cliente {
  constructor(private _nome: string) {}

  get nome():string {
    return this._nome;
  }

}

enum FormaDePagamento {
  Cartao = 1,
  Dinheiro = 0.9,
  Cheque = 0.8, 
  Pix = 0.6,
}

class Item {
  constructor(private _nome: string, private _preco:number) {

  }

  get nome(): string  {
    return this._nome;
  }

  get preco(): number {
    return this._preco
  }
}

class Pedido {
  
  private _items: Item[];

  constructor(private _client: Cliente) {
    this._items = [];
  }

  private _total(): number{
    return this._items.reduce((acc, item) => item.preco + acc, 0 );
  }


  addItem(item: Item) {
    this._items.push(item);
  }

  pagar(formaDePagamento: FormaDePagamento): string {
    return `Client: ${this._client.nome} - Total: ${this._total() * formaDePagamento}R$ - Desconto: ${ (1- formaDePagamento) * 100}%`
  }

  listar() {
    this._items.forEach(item => console.log(`item: ${item.nome} - preço: ${item.preco}`));
  }
}

const pedido = new Pedido(new Cliente('lucas'))
pedido.addItem(new Item('Rubacão', 10));
pedido.addItem(new Item('Rubacão', 10));
pedido.addItem(new Item('Rubacão', 10));
pedido.listar();
const pago = pedido.pagar(FormaDePagamento.Pix);
console.log(pago);
