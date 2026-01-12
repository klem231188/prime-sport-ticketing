import { Component } from '@angular/core';
import { AppTopbar } from './components/app.topbar';
import { StatsWidget } from "./components/dashboard/statswidget";
import { SalesTrendWidget } from "./components/dashboard/salestrendwidget";
import { RecentActivityWidget } from "./components/dashboard/recentactivitywidget";
import { ProductOverviewWidget } from "./components/dashboard/productoverviewwidget";
import { AppFooter } from "./components/app.footer";
import { IconsAndFootnotes } from './components/dashboard/icons-and-footnotes-widget';
import { CenteredThreeByThreeGrid } from './components/dashboard/centered-three-by-three-grid';

@Component({
  selector: 'app-root',
  imports: [AppTopbar, StatsWidget, SalesTrendWidget, RecentActivityWidget, ProductOverviewWidget, AppFooter, IconsAndFootnotes, CenteredThreeByThreeGrid],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
