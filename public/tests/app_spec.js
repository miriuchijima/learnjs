describe('LearnJS',function(){
    it('can show a problem view',function(){
       learnjs.showView('#problem-1');
       expect($('.view-container .problem-view').length).toEqual(1);
       });
    it('shows the landing page view when there is no hash',function(){
       expect($('.view-container .landing-view').length).toEqual(1);
    });
    it('passes the hash view prameter to the view function',function(){
        spyOn(learnjs, 'problemView');
        learnjs.showView('#problem-42');
        expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });
});



