/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MatTextAvatar } from './mat-text-avatar.component';

describe('MatAvatarComponent', () => {
  let component: MatTextAvatar;
  let fixture: ComponentFixture<MatTextAvatar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTextAvatar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTextAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
