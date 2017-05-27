import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AdMob } from 'ionic-native';
@Component({
    selector: 'page-coursegrade',
    templateUrl: 'coursegrade.html'
})
export class CourseGradePage {
    mark1: any;
    mark2: any;
    mark3: any;
    mark5: any;
    mark4: any;
    weight1: any;
    weight2: any;
    weight3: any;
    weight4: any;
    weight5: any;
    currentCourseWeight: any;
    gradePointAverageForCourse: any;
    currentPercent: any;
    remark: any;
    constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform) {
        platform.ready().then(() => {



            var testId = 'ca-app-pub-6937425280917661/1053575230';
            var productionId = 'ca-app-pub-6937425280917661/1053575230';
            AdMob.createBanner({
                adId: productionId,
                adSize: 'SMART_BANNER',
                isTesting: true
            }).then(() => {
                AdMob.showBanner(2);
            });

        });
    }
    calculate() {
        let marksList = this.getMarksList();
        let weightsList = this.getWeightList();
        let totalPercent = this.calculateGrade(marksList, weightsList);
        this.currentPercent = totalPercent;
        if (marksList.size == 0) {
            let noGradeEnteredAlert = this.alertCtrl.create({
                title: 'No Marks Entered!',
                subTitle: 'Please enter a mark.',
                buttons: ['Dismiss']
            });
            noGradeEnteredAlert.present();
        }else if (weightsList.size == 0) {
            let noGradeEnteredAlert = this.alertCtrl.create({
                title: 'No Weights Entered!',
                subTitle: 'Please enter some weights.',
                buttons: ['Dismiss']
            });
            noGradeEnteredAlert.present();
        } else {
            this.determineGPA();
            var messageToPrint = 'Your Mark is ' + totalPercent.toFixed(2) + "%!<br\>";
            messageToPrint = messageToPrint + "You have completed " + this.currentCourseWeight + "% of the course.<br\>";
            messageToPrint = messageToPrint + "Your GPA for the course is " + this.gradePointAverageForCourse + ".<br\>";
            this.getExtraRemark();
            messageToPrint = messageToPrint + this.remark;
            let alert = this.alertCtrl.create({
                title: 'Mark Calculated!',
                message: messageToPrint,
                buttons: [{
                    text: 'Dismiss',
                    handler: () => {
                        //Clear the input fields. 
                        this.mark1 = undefined;
                        this.mark2 = undefined;
                        this.mark3 = undefined;
                        this.mark4 = undefined;
                        this.mark5 = undefined;
                        this.weight1 = undefined;
                        this.weight2 = undefined;
                        this.weight3 = undefined;
                        this.weight4 = undefined;
                        this.weight5 = undefined;
                    }
                }]
            });
            alert.present();
        }
       
    }
    getMarksList() {
        let marksList = new Map<string, number>();

        if (this.mark1 != undefined) {
            marksList.set('1', Number(this.mark1));
        }
        if (this.mark2 != undefined) {
            marksList.set('2', Number(this.mark2));
        } if (this.mark3 != undefined) {
            marksList.set('3', Number(this.mark3));
        } if (this.mark4 != undefined) {
            marksList.set('4', Number(this.mark4));
        } if (this.mark5 != undefined) {
            marksList.set('5', Number(this.mark5));
        }
        return marksList;
    }
    getWeightList() {
        let weightsList = new Map<string, number>();

        if (this.weight1 != undefined) {
            weightsList.set('1', Number(this.weight1));
        }
        if (this.weight2 != undefined) {
            weightsList.set('2', Number(this.weight2));
        } if (this.weight3 != undefined) {
            weightsList.set('3', Number(this.weight3));
        } if (this.weight4 != undefined) {
            weightsList.set('4', Number(this.weight4));
        } if (this.weight5 != undefined) {
            weightsList.set('5', Number(this.weight5));
        }
        return weightsList;
    }
    calculateGrade(marksListMap: Map<string, number>, weightListMap: Map<string, number>) {
        let total = 0;
        let weightSum = 0;
        marksListMap.forEach((mark: number, key: string) => {
            let weight = weightListMap.get(key);
            weightSum = weightSum + (weight / 100);
            total = (mark * (weight / 100)) + total;
        });
        this.currentCourseWeight = weightSum *100;
        total = total / weightSum;
        return total;
    }
    determineGPA() {
        let currentPercent = this.currentPercent;
        if (currentPercent <= 100 && currentPercent >= 85) {
            //4.0
            this.gradePointAverageForCourse = "4.0";
        } else if (currentPercent <= 84 && currentPercent >= 80) {
            this.gradePointAverageForCourse = "3.7";
        } else if (currentPercent <= 79 && currentPercent >= 77) {
            this.gradePointAverageForCourse = "3.3";
        } else if (currentPercent <= 76 && currentPercent >= 73) {
            this.gradePointAverageForCourse = "3.0";
        }
        else if (currentPercent <= 72 && currentPercent >= 70) {
            this.gradePointAverageForCourse = "2.7";
        }
        else if (currentPercent <= 69 && currentPercent >= 67) {
            this.gradePointAverageForCourse = "2.3";
        }
        else if (currentPercent <= 66 && currentPercent >= 63) {
            this.gradePointAverageForCourse = "2.0";
        } else if (currentPercent <= 62 && currentPercent >= 60) {
            this.gradePointAverageForCourse = "1.7";
        } else if (currentPercent <= 59 && currentPercent >= 57) {
            this.gradePointAverageForCourse = "1.3";
        } else if (currentPercent <= 56 && currentPercent >= 53) {
            this.gradePointAverageForCourse = "1.0";
        } else if (currentPercent <= 52 && currentPercent >= 50) {
            this.gradePointAverageForCourse = "0.7";
        } else if (currentPercent <= 49 && currentPercent >= 0) {
            this.gradePointAverageForCourse = "0.0";
        }
    }
    getExtraRemark() {
        if (this.gradePointAverageForCourse = "4.0") {
            //4.0
            this.remark = "Excellent Job!";
        } else if (this.gradePointAverageForCourse == "3.7" || this.gradePointAverageForCourse == "3.3") {
            this.remark = "Impressive! Most Impressive!";
        } else if (this.gradePointAverageForCourse == "3.0" || this.gradePointAverageForCourse == "2.7" || this.gradePointAverageForCourse == "2.3") {
            this.remark = "It's good! Could be better though! ;)";
        }
        else{
            this.remark = "Are you kidding? You're better than that!";
        }
    }
}
