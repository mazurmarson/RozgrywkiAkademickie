import { Routes } from "@angular/router";
import { AdminComponent } from "./adminComponents/admin/admin.component";
import { AddSportComponent } from "./adminComponents/admin/sport/sport/addSport/addSport.component";
import { EditSportComponent } from "./adminComponents/admin/sport/sport/editSport/editSport.component";
import { SportComponent } from "./adminComponents/admin/sport/sport/sport.component";
import { AddCompetitionComponent } from "./adminComponents/competition/competition/addCompetition/addCompetition.component";
import { CompetitionComponent } from "./adminComponents/competition/competition/competition.component";
import { EditCompetitionComponent } from "./adminComponents/competition/competition/editCompetition/editCompetition.component";
import { SelectSportComponent } from "./adminComponents/competition/competition/selectSport/selectSport.component";
import { AddResultComponent } from "./adminComponents/CompetitionResults/addResult/addResult.component";
import { CompetitionResultsComponent } from "./adminComponents/CompetitionResults/CompetitionResults.component";
import { SelectFieldComponent } from "./adminComponents/CompetitionResults/selectField/selectField.component";
import { AddFieldComponent } from "./adminComponents/fieldOfStudy/addField/addField.component";
import { EditFieldComponent } from "./adminComponents/fieldOfStudy/EditField/EditField.component";
import { FieldOfStudyComponent } from "./adminComponents/fieldOfStudy/fieldOfStudy.component";
import { LogComponent } from "./generalComponents/log/log.component";
import { ResultsComponent } from "./generalComponents/Results/Results.component";
import { ResultsArchiveComponent } from "./generalComponents/resultsArchive/resultsArchive.component";
import { UserComponent } from "./userComponets/user/user.component";
import { FieldOfStudyService } from "./_services/fieldOfStudy.service";

export const appRoutes: Routes = [
{
    path: 'log', component: LogComponent
},
{
    path: 'results', component: ResultsComponent
},
{
    path: '', component: ResultsComponent
},
{
    path:'admin', component: AdminComponent
},
{
    path:'user', component: UserComponent
},
{
    path:'sports', component: SportComponent
},
{
    path:'addSport', component: AddSportComponent
},
{
    path:'editSport/:id', component: EditSportComponent
},
{
    path: 'competition', component: CompetitionComponent
}
,
{
    path: 'addCompetition/:id', component: AddCompetitionComponent
},
{
    path: 'selectSport', component: SelectSportComponent
},
{
    path: 'editCompetition/:id', component: EditCompetitionComponent
},
{
    path: 'fields', component:FieldOfStudyComponent
},
{
    path: 'addField', component:AddFieldComponent
},
{
    path: 'editField/:id', component:EditFieldComponent
},
{
    path: 'competitionResults/:id', component:CompetitionResultsComponent
},
{
    path: 'selectField/:id', component:SelectFieldComponent
},
{
    path: 'selectField/:id/addResult/:id2', component:AddResultComponent
},
{
    path: 'resultsArchive', component:ResultsArchiveComponent
}



];