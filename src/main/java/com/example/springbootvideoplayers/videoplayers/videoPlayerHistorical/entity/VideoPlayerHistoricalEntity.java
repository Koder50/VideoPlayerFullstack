package com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.entity;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
public class VideoPlayerHistoricalEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "UUID")
    @Column(nullable = false, updatable = false)
    private UUID id;

    @NotNull(message = "Url Name is required")
    private String urlName;

    @NotNull(message = "Name is required")
    @Column(name = "nameAbbr", columnDefinition = "VARCHAR(300)", nullable = false)
    private String nameAbbr;
    private String createdAt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z")
            .format(new Date());
    @NotNull(message = "watchedUser is required")
    private String watchedUser;
}
