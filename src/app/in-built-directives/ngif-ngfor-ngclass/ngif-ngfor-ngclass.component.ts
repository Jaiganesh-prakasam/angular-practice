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
        { modelName: "i10", color: "red", status: true },
        { modelName: "120", color: "green", status: false },
        { modelName: "elantra", color: "yellow", status: true },
        { modelName: "verna", color: "blue", status: false }
      ]
    },
    {
      companyName: "Honda",
      models: [
        { modelName: "city", color: "red", status: false },
        { modelName: "civic", color: "green", status: true },
        { modelName: "camry", color: "yellow", status: true },
        { modelName: "fortuner", color: "blue", status: false }
      ]
    },
    {
      companyName: "Maruthi-Suzuki",
      models: [
        { modelName: "swift", color: "red", status: false },
        { modelName: "wagonR", color: "green", status: true },
        { modelName: "ertiga", color: "yellow", status: true },
        { modelName: "baleno", color: "blue", status: true }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
