
import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, AccordionComponent, AccordionItemComponent, TemplateIdDirective, AccordionButtonDirective, BgColorDirective } from '@coreui/angular';
import { IconComponent } from '@coreui/icons-angular';
import { IndexButton } from '../../../../components/index/index-buttons/index-button';
import { Staff } from '../staff';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { StaffEdit } from '../edit/staff.edit';
import { StaffService } from '../staff.service';

@Component({
    selector: 'staff-index',
    templateUrl: './staff.index.html',
    styleUrls: ['./staff.index.scss'],
    providers: [StaffService],
    imports: [
        IndexButton,
        StaffEdit,
        CommonModule,
        RouterModule
    ]
})
export class StaffIndex {

    constructor(private staffService: StaffService) {
        // Initialization logic can go here if needed
    }


    staffList: Staff[] = [];

    list$: Observable<Staff[]> = new Observable<Staff[]>();

    ngOnInit() {

        let m = new Staff();
        m.id = 1;
        m.firstName = 'John';
        m.lastName = 'Doe';
        this.staffList.push(m);

        m = new Staff();
        m.id = 2;
        m.firstName = 'Jane';
        m.lastName = 'Smith';
        this.staffList.push(m);

        this.list$ = of(this.staffList);
    }

    onDblClicked() {

    }

    entityTitle: string = 'Staff Management';

    selectedItem: Staff = new Staff();

    editMode: boolean = false;

    addMenu() {
        // Logic to add a new menu item
        console.log('Add Menu button clicked');

    }

    editMenu() {
        console.log('Edit Menu button clicked');
    }

    deleteMenu() {
        // Logic to delete a menu item
        console.log('Delete Menu button clicked');
    }
    onSelect(staff: Staff) {
        // Logic to handle staff selection
        console.log('Staff selected:', staff);
        this.selectedItem = staff;
        this.editMode = true;
    }

    selectStaff(id: number) {
        // Logic to select a staff member
        const staff = this.staffList.find(s => s.id === id);
        if (!staff) return;
        console.log('Staff selected:', staff);
        this.selectedItem = staff;
    }

    onStaffClick(staff: Staff) {
        console.log('Staff item clicked:', staff);
        this.selectedItem = staff;
        this.editMode = true;
    }

    onClose(saved: boolean) {
        console.log('Hide form called');
        this.editMode = false;
        this.selectedItem = new Staff();
        if (saved) {
            this.reloadMenuList();
        }
    }

    delete(staff: Staff) {
        console.log('Delete staff called:', staff);
        // Logic to delete the staff member
    }

    edit(staff: Staff) {

    }

    reloadMenuList() {
        console.log('Reload menu list called');
        // Logic to reload the menu list, e.g., fetching from a service
        // For now, we will just log the current menus
        console.log('Current menus:', this.staffList);
    }




}