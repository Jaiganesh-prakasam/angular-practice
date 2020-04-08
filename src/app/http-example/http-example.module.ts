import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreHttpComponent } from "./core-http/core-http.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpUsingPromiseComponent } from "./http-using-promise/http-using-promise.component";
import { SearchService } from "./search.service";
import { SearchObservableService } from "./search-observable.service";
import { HttpUsingObservableComponent } from "./http-using-observable/http-using-observable.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    CoreHttpComponent,
    HttpUsingPromiseComponent,
    HttpUsingObservableComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  exports: [
    CoreHttpComponent,
    HttpUsingPromiseComponent,
    HttpUsingObservableComponent,
  ],
  providers: [SearchService, SearchObservableService],
})
export class HttpExampleModule {}
