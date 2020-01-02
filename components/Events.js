import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/scss/events.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <section className="events">
    <div className="event_main"><br></br><br></br><br></br><br></br>
      <div className="heading"><h1>Events</h1> </div>
    <div className="column">
        <div className="row"> 
          <div className="mem1">
                    <div className={classes.root}>
                      <ExpansionPanel className="exp">
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <div className="event1"><img src="/static/dark1.jpg"></img></div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                                                    October brings in charisma to our lives, be it the advent of winters or the
                                                    festival
                                                    of lights. This year October
                                                    brings in another jewel to add to the festivities, Version β: Possibly India’s
                                                    biggest hackathon in the near future.
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    
                    </div>        
              </div>
              <div className="mem1"> 
                        <div className={classes.root}>
                          <ExpansionPanel className="exp">
                            <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <div className="event1"><img src="/static/chimerax.jpg"></img></div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                              <Typography>
                                                        October brings in charisma to our lives, be it the advent of winters or the
                                                        festival
                                                        of lights. This year October
                                                        brings in another jewel to add to the festivities, Version β: Possibly India’s
                                                        biggest hackathon in the near future.
                              </Typography>
                            </ExpansionPanelDetails>
                          </ExpansionPanel>
                        
                          
                        </div>

              </div>  
              <div className="mem1">   
                        <div className={classes.root}>
                          <ExpansionPanel className="exp">
                            <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <div className="event1"><img src="/static/codathon.jpg"></img></div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                              <Typography>
                                                        October brings in charisma to our lives, be it the advent of winters or the
                                                        festival
                                                        of lights. This year October
                                                        brings in another jewel to add to the festivities, Version β: Possibly India’s
                                                        biggest hackathon in the near future.
                              </Typography>
                            </ExpansionPanelDetails>
                          </ExpansionPanel>
                        
                          
                        </div>
                  </div>      
                        
        </div>
  </div> 
  <div className="column">
  <div className="row"> 
    <div className="mem1">
              <div className={classes.root}>
                <ExpansionPanel className="exp">
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="event1"><img src="/static/megatreopuz.jpg"></img></div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                                              October brings in charisma to our lives, be it the advent of winters or the
                                              festival
                                              of lights. This year October
                                              brings in another jewel to add to the festivities, Version β: Possibly India’s
                                              biggest hackathon in the near future.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              
              </div>        
        </div>
        <div className="mem1"> 
                  <div className={classes.root}>
                    <ExpansionPanel className="exp">
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <div className="event1"><img src="/static/anubhuti.jpg"></img></div>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>
                                                  October brings in charisma to our lives, be it the advent of winters or the
                                                  festival
                                                  of lights. This year October
                                                  brings in another jewel to add to the festivities, Version β: Possibly India’s
                                                  biggest hackathon in the near future.
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  
                    
                  </div>

        </div>  
        <div className="mem1">   
                  <div className={classes.root}>
                    <ExpansionPanel className="exp">
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <div className="event1"><img src="/static/joyride.jpg"></img></div>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>
                                                  October brings in charisma to our lives, be it the advent of winters or the
                                                  festival
                                                  of lights. This year October
                                                  brings in another jewel to add to the festivities, Version β: Possibly India’s
                                                  biggest hackathon in the near future.
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  
                    
                  </div>
            </div>      
                  
  </div>
</div>

<div className="column">
        <div className="row"> 
          <div className="mem1">
                    <div className={classes.root}>
                      <ExpansionPanel className="exp">
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <div className="event1"><img src="/static/goonj.jpg"></img></div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                                                    October brings in charisma to our lives, be it the advent of winters or the
                                                    festival
                                                    of lights. This year October
                                                    brings in another jewel to add to the festivities, Version β: Possibly India’s
                                                    biggest hackathon in the near future.
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    
                    </div>        
              </div>
                 
                        
        </div>
  </div>
</div>
<br></br><br></br><br></br><br></br><br></br>
</section>   
  );
}