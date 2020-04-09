import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreHttpComponent } from "./core-http/core-http.component";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { HttpUsingPromiseComponent } from "./http-using-promise/http-using-promise.component";
import { SearchService } from "./search.service";
import { SearchObservableService } from "./search-observable.service";
import { SearchJsonPService } from "./search-json-p.service";
import { HttpUsingObservableComponent } from "./http-using-observable/http-using-observable.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpUsingJsonpComponent } from "./http-using-jsonp/http-using-jsonp.component";
@NgModule({
  declarations: [
    CoreHttpComponent,
    HttpUsingPromiseComponent,
    HttpUsingObservableComponent,
    HttpUsingJsonpComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientJsonpModule,
  ],
  exports: [
    CoreHttpComponent,
    HttpUsingPromiseComponent,
    HttpUsingObservableComponent,
    HttpUsingJsonpComponent,
  ],
  providers: [SearchService, SearchObservableService, SearchJsonPService],
})
export class HttpExampleModule {}
