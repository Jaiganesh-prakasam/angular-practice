import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreHttpComponent } from "./core-http/core-http.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpUsingPromiseComponent } from "./http-using-promise/http-using-promise.component";
import { SearchService } from "./search.service";
@NgModule({
  declarations: [CoreHttpComponent, HttpUsingPromiseComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CoreHttpComponent, HttpUsingPromiseComponent],
  providers: [SearchService],
})
export class HttpExampleModule {}
