import { Injectable, NotFoundException } from "@nestjs/common";
import { UpsertDTO } from "./dto/upsert.dto";

@Injectable()
export class CustomersService {
   private customers: Array<any>;
   // método especial - ele é chamado na criação
   constructor() {
     this.customers = [
        {
            "id": 1,
            "nome": "Félix",
            "email": "felix@gmail.com",
            "idade": 18
        },
        {
            "id": 2,
            "nome": "Maria",
            "email": "maria@gmail.com",
            "idade": 22
            
        }
     ]
   }

   get() {
    return this.customers;
   }

   create(customer: UpsertDTO) {
     let id = 1;
     if(this.customers.length != 0) {
        id = this.customers[this.customers.length - 1].id + 1
     }
     this.customers.push({
      "id": id,
      ...customer
     });

     return {
        "message": "Salvo com sucesso"
     };
   }

   delete(id: number) {
      const position = this.customers.findIndex((customer) => customer.id == id);
      if (position == -1) {
          throw new NotFoundException('Cliente não encontrado');

      }
      this.customers.splice(position, 1);

      return {
         "message": "Removido com sucesso"
      };
   }

   update(id: number , customer: UpsertDTO) {
      const position = this.customers.findIndex((c) => c.id == id);
      if (position == -1) {
         throw new NotFoundException('Cliente não encontrado');
      }
      this.customers[position] = {
         'id': this.customers[position].id,
         ...customer
      };

      return {
         "message": "Atualizado com sucesso"
      };



   }


}