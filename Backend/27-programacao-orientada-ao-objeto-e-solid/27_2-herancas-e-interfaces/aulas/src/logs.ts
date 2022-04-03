interface Logger {
  log(text: string): void;
}

interface Database {
  save(key: string, value: string): void 
}

class ConsoleLogger implements Logger {
  log(text: string) {
    console.log(text);
  }
}

class ConsoleLogger2 implements Logger {
  log(text: string): void {
    console.log(text, 2);
  }
}

class ExampleDatabase implements Database {
  constructor(private logger: Logger = new ConsoleLogger()) {

  }
  
  save(key: string, value: string): void {
    this.logger.log(`${key}: ${value}`);
  }
}

const db1 = new ExampleDatabase(new ConsoleLogger());
const db2 = new ExampleDatabase(new ConsoleLogger2());
const db3 = new ExampleDatabase();


db1.save('a', '1');
db2.save('b', '2');
db3.save('c', '3');


