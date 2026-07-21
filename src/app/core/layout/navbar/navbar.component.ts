import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule
    ],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    // private layoutService = inject(LayoutService);
    private themeService = inject(ThemeService);

    toggleSidebar() {
        // this.layoutService.toggleSidebar();
    }

    toggleTheme() {
        // this.themeService.toggleTheme();
    }

    toggleFullscreen() {

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }

    }

}