import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LogComponent } from './generalComponents/log/log.component';
import { ResultsComponent } from './generalComponents/Results/Results.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AdminComponent } from './adminComponents/admin/admin.component';
import { UserComponent } from './userComponets/user/user.component';
import { SportComponent } from './adminComponents/admin/sport/sport/sport.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSportComponent } from './adminComponents/admin/sport/sport/addSport/addSport.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditSportComponent } from './adminComponents/admin/sport/sport/editSport/editSport.component';
import { CompetitionComponent } from './adminComponents/competition/competition/competition.component';
import { AddCompetitionComponent } from './adminComponents/competition/competition/addCompetition/addCompetition.component';
import { SelectSportComponent } from './adminComponents/competition/competition/selectSport/selectSport.component';
import { EditCompetitionComponent } from './adminComponents/competition/competition/editCompetition/editCompetition.component';
import { FieldOfStudyComponent } from './adminComponents/fieldOfStudy/fieldOfStudy.component';
import { AddFieldComponent } from './adminComponents/fieldOfStudy/addField/addField.component';
import { EditFieldComponent } from './adminComponents/fieldOfStudy/EditField/EditField.component';
import { CompetitionResultsComponent } from './adminComponents/CompetitionResults/CompetitionResults.component';
import { SelectFieldComponent } from './adminComponents/CompetitionResults/selectField/selectField.component';
import { AddResultComponent } from './adminComponents/CompetitionResults/addResult/addResult.component';
import { ResultsArchiveComponent } from './generalComponents/resultsArchive/resultsArchive.component';
@NgModule({
  declarations: [	
    AppComponent,
      NavComponent,
      LogComponent,
      ResultsComponent,
      AdminComponent,
      UserComponent,
      SportComponent,
      AddSportComponent,
      EditSportComponent,
      CompetitionComponent,
      AddCompetitionComponent,
      SelectSportComponent,
      EditCompetitionComponent,
      FieldOfStudyComponent,
      AddFieldComponent,
      EditFieldComponent, 
      CompetitionResultsComponent,
      SelectFieldComponent,
      AddResultComponent,
      ResultsArchiveComponent
     
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
