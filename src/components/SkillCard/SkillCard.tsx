import React from "react";
import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from "react-native"
import styles from "./style"

interface SkillCardProps extends TouchableOpacityProps{
    skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps){ 
    return(
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}