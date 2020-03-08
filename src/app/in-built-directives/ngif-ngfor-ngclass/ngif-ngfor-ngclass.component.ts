import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngif-ngfor-ngclass",
  templateUrl: "./ngif-ngfor-ngclass.component.html",
  styleUrls: ["./ngif-ngfor-ngclass.component.sass"]
})
export class NgifNgforNgclassComponent implements OnInit {
  carCompanies: any[] = [
    {
      companyName: "Hyundai",
      models: [
        { modelName: "i10", color: "red" },
        { modelName: "120", color: "green" },
        { modelName: "elantra", color: "yellow" },
        { modelName: "verna", color: "blue" }
      ]
    },
    {
      companyName: "Honda",
      models: [
        { modelName: "city", color: "red" },
        { modelName: "civic", color: "green" },
        { modelName: "camry", color: "yellow" },
        { modelName: "fortuner", color: "blue" }
      ]
    },
    {
      companyName: "Maruthi-Suzuki",
      models: [
        { modelName: "swift", color: "red" },
        { modelName: "wagonR", color: "green" },
        { modelName: "ertiga", color: "yellow" },
        { modelName: "baleno", color: "blue" }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
